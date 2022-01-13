<template>
    <div class="pswp-gallery" id="gallery">
        <a v-for="item in images" :href="item.image" :data-pswp-width="item.width" :data-pswp-height="item.height">
            <figure>
                <img :src="item.thumbnail"/>
                <figcaption>{{item.title}}</figcaption>
            </figure>
        </a>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['images'],

        async mounted() {
            if (!__VUEPRESS_SSR__) {
                const PhotoSwipeLightbox = (await import('photoswipe/dist/photoswipe-lightbox.esm.js')).default;
                const PhotoSwipe = (await import('photoswipe/dist/photoswipe.esm.js')).default;
                const lightbox = new PhotoSwipeLightbox({
                    gallery: '#gallery',
                    children: 'a',
                    pswpModule: PhotoSwipe
                });
                lightbox.init();
            }
        }
    }
</script>

<style lang="scss">
    figure {
        margin: 0px;
        margin-bottom: 1rem;
        position: relative;
        background-color: red;

        figcaption {
           position:absolute;
           bottom: 0;
           padding-bottom: 5px;
           background-color: var(--c-bg-secondary);
           width: 100%;
           text-align: center;
        }
    }

</style>