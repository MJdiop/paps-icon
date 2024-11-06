import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paps icons",
  description: "A librerie icons build by paps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: '', link: '/documentation' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/paps-app/paps-icon' }
    ]
  }
})
