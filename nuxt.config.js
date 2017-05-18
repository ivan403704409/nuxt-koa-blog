module.exports = {
  build: {
    vendor: ['axios']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  plugins: [
    // '~plugins/muse-ui',
    { src: '~plugins/muse-ui.js', ssr: !false }
  ],
}
