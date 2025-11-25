import Vue from 'vue'
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)
ScrollTrigger.config({
  //limitCallbacks: true,
  ignoreMobileResize: true
})


Vue.mixin({

  methods: {
    openBooking () {
      this.$store.commit('SET_BOOKING', true)
    },
    stripHtml (str) {
      str = str.replace("<br>", " ")
      return str.replace(/(<([^>]+)>)/gi, "")
    },
    ctaHref(cta){
      if (cta.href.substring(0, 4) !== 'http'
        && !cta.link
      ) {
        return this.ImageBaseUrl+cta.href
      }else{
        return cta.href
      }
    },
    clearDesc (desc) {
      if(desc){
        return desc.replace("<br>", " ")
      }else{
        return ''
      }
      //return desc;

    },
    clearSlug(fullPath){
      let check = fullPath.slice(-1);
      if(check ==='/' && fullPath.length >1 ){
        fullPath = fullPath.slice(0, -1);
      }
      return fullPath
    }
  },
  computed: {
    gridDebug () {
      return this.$store.getters.gridDebug
    },
    currentLang () {
      return this.$store.getters.getCurrentLanguage
    },
    currentSlug () {
      return this.$store.getters.getCurrentSlug
    },
    currentNavItem () {
      return this.$store.getters.getMenuItemBySlug(this.$store.getters.getCurrentSlug)
    },
    currentPage () {
      return this.$store.getters.getCurrentPage
    },
    pageTranslationId () {
      let currentItem = this.currentNavItem
      return currentItem.tid || false
    },
    fullNav () {
      return this.$store.getters.getFullNavigation.tree ? this.$store.getters.getFullNavigation : false
    },
    rooms () {
      return this.$store.getters.getMenuItemsByLang(this.currentLang, 'rooms')
    },
    infoModal () {
      return this.$store.getters.getInfoModal
    },
    loadingStatus () {
      return this.$store.getters.getLoadingStatus
    },
    siteOptions () {
      return this.$store.state.siteOptions
    },
    contacts () {
      return this.$store.getters.getContacts
    },
    ImageBaseUrl () {
      let development = process.env.NODE_ENV !== 'production'
      // let base = development ? '/' : '/crossing-manzoni/'
      //return  development ?  '/photos' : 'https://www.crossingmanzoni.it/photos'
      return 'https://www.stage72.info/crossing-manzoni/_repo'
    },
    mediaModal(){
      return this.$store.getters.getMediaModal
    }

  }
})
