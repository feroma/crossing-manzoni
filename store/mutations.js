export default {

  UPDATE_CURRENT_LANG (state, value) {
    //state.currentEntry = 'none'
    state.siteOptions.currentLang = value
  },
  UPDATE_CURRENT_SLUG(state, value) {
    //state.currentEntry = 'none'
    state.siteOptions.currentSlug = value
  },
  /**
   * ------------------LOADING
   */
  TOGGLE_LOADING_STATUS (state) {
    //state.currentEntry = 'none'
    state.loading = !state.loading
  },
  SET_LOADING_STATUS (state,value) {
    //state.currentEntry = 'none'
    state.loading = value
  },
  /**
   * ------------------menu
   */
  TOGGLE_MENU (state) {
    //state.currentEntry = 'none'
    state.siteOptions.sideMenuOpen = !state.siteOptions.sideMenuOpen
  },
  SET_MENU (state,value) {
    //state.currentEntry = 'none'
    state.siteOptions.sideMenuOpen = value
  },
  UPDATE_NAVIGATION (state,value) {
    //state.currentEntry = 'none'
    state.navigation = value
  },
  /**
   * ------------------PAGES
   */
  UPDATE_CURRENT_PAGE(state, value){
    state.currentPage = value
  },
  /**
   * ------------------booking
   */
  TOGGLE_BOOKING(state) {
    //state.currentEntry = 'none'
    state.siteOptions.bookingOpen = !state.siteOptions.bookingOpen
  },
  SET_BOOKING (state,value) {
    //state.currentEntry = 'none'
    state.siteOptions.sideMenuOpen = false
    state.siteOptions.bookingOpen = value
  },
  /**
   * ------------------INFO MODAL
   */
  SET_INFO_MODAL (state,value) {
    //state.currentEntry = 'none'
    state.infoModal = value
  },
  /**
   * ------------------MEDIA MODAL
   */
  SET_MEDIA_MODAL (state,value) {
    //state.currentEntry = 'none'
    state.mediaModal = value
  },
  TOGGLE_MEDIA_MODAL (state) {
    //state.currentEntry = 'none'
    state.mediaModal.media = false
      state.mediaModal.show = !state.mediaModal.show
  },
  /**
   * ------------------debug
   */
  TOGGLE_DEBUG(state) {
    //state.currentEntry = 'none'
    state.siteOptions.gridDebug = !state.siteOptions.gridDebug
  },
}
