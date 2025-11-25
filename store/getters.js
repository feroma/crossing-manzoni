export default {

  getLoadingStatus (state) {
    return state.loading
  },
  getInfoModal (state) {
    return state.infoModal
  },
  getMediaModal (state) {
    return state.mediaModal
  },

  getLanguages (state) {
    return state.siteOptions.languages
  },
  getCurrentLanguage (state) {
    return state.siteOptions.currentLang
  },
  isLanguageActive: (state, getter) => (lang) => {
    const languages = getter.getLanguages
    const index = languages.find(item => item === lang)
    return index !== -1
  },
  getContents (state, getters) {
    const lang = getters.getCurrentLanguage
    return state.contents[lang]
  },

  //////////////NAVIGATION
  getFullNavigation (state) {
    return state.navigation
  },
  getRoomsNavigation (state) {
    return state.navigation['rooms']
  },
  getCategoriesNavigation (state) {
    return state.navigation['categories']
  },
  getNavigation: (state, getter) => (type = 'main') => {
    if (type === 'categories') {
      return state.navigation['categories']['tree']
    } else if (type === 'rooms') {
      return state.navigation['rooms']['tree']
    } else {
      return state.navigation['tree']
    }
  },
  getCurrentSlug (state) {
    return state.siteOptions.currentSlug
  },
  getCollection (state, getter) {
    const fullNav = getter.getFullNavigation;
    return fullNav.collection
  },
  getContacts (state, getter) {
    const fullNav = getter.getFullNavigation;
    return fullNav.contacts
  },
  //////////MENU ITEMS
  getMenuItemById: (state, getter) => (id, type = 'main') => {
    const tree = getter.getNavigation(type)
    const index = tree.findIndex(item => item.id === id)
    return index !== -1 ? tree[index] : false
  },
  getMenuItemBySlug: (state, getter) => (slug, type = 'main') => {
    const main = getter.getNavigation(type)
    const rooms = getter.getNavigation('rooms')
    const tree = [...main,...rooms]
    const index = tree.findIndex(item => item.slug === slug)
    return index !== -1 ? tree[index] : false
  },
  getMenuItemsByLang: (state, getter) => (lang, type = 'main') => {
    if (!lang) {
      lang = getter.getCurrentLanguage
    }
    const tree = getter.getNavigation(type)
    return tree.filter((item) => item.lang === lang)
  },

  //////////pages
  getCurrentPage (state) {
    return state.currentPage
  },

  getActualSection (state) {
    return state.currentSection
  },
    //////////debug
  gridDebug (state) {
    return state.siteOptions.gridDebug
  },
}
