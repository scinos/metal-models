import { defineClientAppEnhance } from '@vuepress/client'
import Gallery from './components/Gallery.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Gallery', Gallery)
})