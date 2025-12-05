export default defineNuxtConfig({
  modules: [
    '@nuxt/ui'
  ],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    primary: 'cyan'
  },
  app: {
    head: {
      title: 'Marketing Láser Digital',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agencia de marketing digital con soluciones innovadoras y futuristas' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})