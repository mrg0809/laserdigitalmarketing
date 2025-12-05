export default defineNuxtConfig({
  modules: [
    '@nuxt/ui'
  ],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    primary: 'cyan',
    colors: {
      primary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344'
      }
    }
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