export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "job-board-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // buildModules: [
  //   // https://go.nuxtjs.dev/eslint
  //   '@nuxtjs/eslint-module'
  // ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/separate-env"
  ],

  env: {
    /* FOR ADZUNA API */
    VUE_APP_ID: "972ed168",
    VUE_APP_KEY: "6acc63fbb70fca920921fb546c67055f",
    BASE_URL: "http://api.adzuna.com/v1/api/jobs",

    /*INDEED API */
    // BASE_URL: "https://api.indeed.com/ads/apisearch",
    // CLIENT_ID: "20ad6e3b9ec2c54711223d748119fa03af8aa6a39c2748001f4126b755621695",

    // BASE_PARAMS: "search/1?&results_per_page=20&content-type=application/json"
    BASE_PARAMS: "search/1?content-type=application/json"
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
