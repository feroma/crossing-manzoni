<template>
  <header class="header _w-100">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="logo  flex-1-1">
          <nuxt-link :to="items[0].slug" class="d-block">
            <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
          </nuxt-link>

        </div>
        <book-link class="d-none d-sm-inline-block mb-0"/>
        <div class="d-flex justify-content-end flex-1-1">
          <language-switcher/>
          <menu-icon @click.native.stop.prevent="toggleMenu"/>
        </div>


      </div>
    </div>
  </header>

</template>

<script>
import gsap from "gsap"


export default {
  name: "SiteHeader",
  data () {
    return {

      show: false
    }
  },
  computed: {
    items(){
      return this.$store.getters['getMenuItemsByLang'](this.currentLang)
    },
  },
  methods: {
    toggleMenu(){
        this.$store.commit('TOGGLE_MENU')
    }
  },
  props: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
