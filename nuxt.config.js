
let development = process.env.NODE_ENV !== 'production'


let base = development ? '/' : '/crossing-manzoni/'
let baseURL = development  ? "http://data-crossing.local/" : 'https://www.stage72.info/crossing-manzoni/api/'

// let base = development ? '/' : '/cm_dev/'
//let baseURL = development  ? "http://data-crossing.local/" : 'https://www.stage72.info/cm_dev/api/'
import axios from 'axios'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crossing-manzoni',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'oyyBVongCy6JAIdK6FewPsEUE6RGMsFGnwVtAzPQKsY' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: base+'favicon.ico' },
      {rel: "apple-touch-icon", sizes: "57x57", href: base+"img/favicon/apple-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: base+"img/favicon/apple-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: base+"img/favicon/apple-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: base+"img/favicon/apple-icon-76x76.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: base+"img/favicon/apple-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: base+"img/favicon/apple-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: base+"img/favicon/apple-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: base+"img/favicon/apple-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: base+"img/favicon/apple-icon-180x180.png"},
      {rel: "icon", type: "image/png", sizes: "192x192", href: base+"img/favicon/android-icon-192x192.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: base+"img/favicon/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "96x96", href: base+"img/favicon/favicon-96x96.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: base+"img/favicon/favicon-16x16.png"}
    ],
    script: [
      {
        hid: 'gtm-script',
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NRRWWJ83');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtm-script': ['innerHTML']
    }
  },

  target:'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/commons',
    { src: '~plugins/v-calendar.js', ssr: false, mode: 'client' },
    {
      src: "~/plugins/locomotiveScroll.js",
      ssr: false
    },
    { src: '~/plugins/gtm-consent.client.js', mode: 'client' }
  ],
  //target: 'static',
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: baseURL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "gsap"
    ]
  },
  router: {
    base
  },
  robots: [
    {
      UserAgent: '*',
      Disallow:  [
        '/admin',
        '/admin/',
        '/landing',
        '/test',
        '/call',
        '/OLD',
        '/home',
        '/admin/*',
        '/error/*'
      ],
     // sitemap:'https://www.vendiamonegozi.it/sitemap.xml'
    }
  ],
  /*sitemap: async() => {

    /!**
     * indirizzi AD
     *!/
    const payload = {
      action:'get_sitemap',
      'origin':'sitemap'
    }
    const nav_routes = await axios.post(baseURL + '/index.php', payload)
    let nav_it = nav_routes.data['it'];
    let nav_en = nav_routes.data['en'];
    /!**
     * MERGE posts....
     *!/
    console.log(nav_routes,'===================================== ROUTES')

    //const routes = ad_routes
    return [
      {
       //hostname: 'https://www.crossing-manzoni.it',
       // gzip: true,
        path: '/sitemap-it.xml',
        lastmod: new Date(),
        routes: nav_it
      },
      {
        // hostname: 'https://www.crossing-manzoni.it',
        // gzip: true,
        path: '/sitemap-en.xml',
        lastmod: new Date(),
        routes: nav_en
      }
    ]


  },*/
}
