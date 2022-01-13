import { defineClientAppEnhance } from '@vuepress/client'
import Gallery from './components/Gallery.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('Gallery', Gallery)
})
