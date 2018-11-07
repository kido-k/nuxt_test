module.exports = {
  head: {
    title: 'my-first-nuxt-app',
    titleTemplate: '%s | Nuxt.js tag items viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {

  },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/logger.js',
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  router: {
    middleware: [
      'auth'
    ]
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

