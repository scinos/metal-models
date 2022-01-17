<template>
    <a class="gallery-entry" :href="modelPath">
        <figure>
            <img :src="imagePath" :alt="alt" />
            <figcaption>{{ name }}</figcaption>
        </figure>
    </a>
</template>

<script lang="ts">
export default {
    props: ['path', 'name', 'alt'],
    computed: {
        modelPath() {
            return `/models/${this.path}`
        },
        imagePath() {
            return `/images/${this.path}/entry.webp`
        },
    },
}
</script>

<style lang="scss">
.gallery-entry figure {
    transition: 100ms linear;

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
