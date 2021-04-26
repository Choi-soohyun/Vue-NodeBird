module.exports = {
  head: {
    title: 'Nuxt',
  },
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  build: {
    analyze: true,
  },
  plugin: [

  ],
  vuetify: {

  },
  axios: {
    baseURL: 'http://localhost:3085',
  },
}; // 모든 페이지의 기본 속성들