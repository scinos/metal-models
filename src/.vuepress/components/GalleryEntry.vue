<template>
    <a class="gallery-entry" :href="modelPath">
        <figure>
            <img :src="imagePath" :alt="alt" height="200" width="200" />
            <figcaption>{{ name }}</figcaption>
        </figure>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        path: String,
        name: String,
        alt: String,
    },
    computed: {
        modelPath(): string {
            return `/models/${this.path}.html`
        },
        imagePath(): string {
            return `/images/${this.path}/entry.webp`
        },
    },
})
</script>

<style lang="scss">
.gallery-entry figure {
    transition: 100ms linear;
    margin: 2rem;

    img {
        filter: grayscale(1);
    }

    &:hover {
        transform: perspective(100px) translateZ(3px) rotateZ(-1deg);
        filter: drop-shadow(10px 10px 20px black);

        img {
            filter: none;
        }
    }
}
</style>
