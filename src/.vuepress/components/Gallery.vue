<template>
    <div class="pswp-gallery" id="gallery">
        <a
            v-for="(item, index) in imagesWithPath"
            :key="index"
            :href="item.image"
            :data-pswp-width="vertical ? height : width"
            :data-pswp-height="vertical ? width : height"
        >
            <figure>
                <img :src="item.thumbnail" loading="lazy" />
                <figcaption v-if="item.title">{{ item.title }}</figcaption>
            </figure>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['images', 'path', 'vertical'],

    data() {
        return {
            width: 3840,
            height: 2160,
        }
    },

    computed: {
        imagesWithPath() {
            return this.images.map((image: string) => ({
                image: `/images/${this.path}/${image}.jpg`,
                thumbnail: `/images/${this.path}/${image}_thumb.webp`,
            }))
        },
    },

    async mounted() {
        if (!__VUEPRESS_SSR__) {
            const PhotoSwipeLightbox = (
                await import('photoswipe/dist/photoswipe-lightbox.esm.js')
            ).default
            const PhotoSwipe = (
                await import('photoswipe/dist/photoswipe.esm.js')
            ).default
            const lightbox = new PhotoSwipeLightbox({
                gallery: '#gallery',
                children: 'a',
                pswpModule: PhotoSwipe,
            })
            lightbox.init()
        }
    },
})
</script>

<style lang="scss">
.pswp-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

figure {
    margin: 1rem;
    position: relative;

    figcaption {
        position: absolute;
        bottom: 0;
        padding-bottom: 5px;
        background-color: var(--c-bg-secondary);
        width: 100%;
        text-align: center;
    }
}
</style>
