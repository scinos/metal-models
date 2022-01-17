import { defineClientAppEnhance } from '@vuepress/client'
import Gallery from './components/Gallery.vue'
import GalleryEntry from './components/GalleryEntry.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('Gallery', Gallery)
    app.component('GalleryEntry', GalleryEntry)
})
