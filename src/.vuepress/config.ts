import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // common config
  dest: './dist',
  temp: './.temp',
  cache: './.cache',

  // site config
  title: 'Metal Models',
  description: 'Pictures of my Metal Earth models',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    darkMode: false,
    logo: '/images/logo_128.png',
    themePlugins: {
      nprogress: false,
      git: false,
    },
    navbar: [
      // NavbarItem
      {
        text: 'Models',
        link: '/',
      },
    ],
  },
  markdown: {
    anchor: false
  }
})