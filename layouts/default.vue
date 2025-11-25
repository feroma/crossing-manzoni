<template>

  <div class="_bg-gray-4 main-screen">
    <div id="loadingScreen" v-if="loadingStatus">
      <div class="loading-screen-content text-center">
        <loading-icon/>
      </div>
    </div>

    <div id="js-scroll" class="scroll-container">
      <Nuxt/>
    </div>


    <transition name="fade">
      <modal-main-menu v-if="siteOptions.sideMenuOpen"/>
    </transition>
    <transition name="fade">
      <modal-booking v-if="siteOptions.bookingOpen"/>
    </transition>

    <modal-info/>
    <transition name="fade">
      <modal-media v-if="mediaModal.show"/>
    </transition>

    <book-link class="book-link-fx d-sm-none"/>

    <div id="grid-debug" v-if="gridDebug">
      <div class="container">
        <div class="row">
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
          <div class="col-1 col-even"></div>
          <div class="col-1 col-odd"></div>
        </div>
      </div>
    </div>


  </div>

</template>
<script>


export default {
  data () {
    return {
      show: false
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  },
  computed: {
    bodyClass () {
      return this.siteOptions.sideMenuOpen || this.siteOptions.bookingOpen || this.mediaModal.show
        ? 'overflow-hidden' : ''
    }
  },
  methods: {}
}
</script>
<style>


</style>
