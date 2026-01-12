<template>
  <footer class="footer w-100">
    <div class="footer-section bg-gray-6">
      <div class="container">
        <div class="row align-items-center justify-content-between py-2">
          <div class="logo d-none d-sm-block">
            <nuxt-link :to="items[0].slug" class="d-block">
              <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
            </nuxt-link>
          </div>
          <div class="footer-menu flex-grow-1 pl-lg-5">

            <ul class="list-unstyled d-flex flex-wrap flex-grow-1 justify-content-center justify-content-sm-between">
              <!-- ------------ home-->
              <li>
                <nuxt-link :to="items[0].slug">
                  {{items[0].label}}
                </nuxt-link>
              </li>

              <!-- ------------ ROOMS-->
              <li>
                <nuxt-link :to="categories[0].child[0].slug">
                  {{categories[0].label}}
                </nuxt-link>
              </li>

              <!-- ------------ rest-->
              <li v-for="(item, index) in items" :key="'item-'+index" v-if="index>0 && !item.hide">
                <nuxt-link :to="item.slug">
                  {{item.label}}
                </nuxt-link>
              </li>


            </ul>


          </div>
        </div>
      </div>
      <div class="footer-section bg-footer py-3 py-lg-4">
        <div class="container">
          <div class="row justify-content-between">

            <div class="col-12">

              <div class="row">
                <div class="col-12 col-sm-4">
                  <p class="d-inline-block   text-center text-sm-left mr-sm-2 text-gray-1  d-block  pr-sm-3">
                    <span v-html="address_text"/>
                    <br>
                    <span v-html="contacts.email"/>
                  </p>
                </div>
                <div class="col-12 col-sm-4">
                  <p class="text-gray-1 text-center d-block">
                    {{ footer_labels[0] }}<br>
                     <strong><span v-html="contacts.phone"/></strong>
                  </p>
                </div>
                <div class="col-12 col-sm-4">
                  <p class="text-gray-1 text-center text-sm-right m-0 pr-2 d-block">
                    {{ footer_labels[1] }}
                  </p>
                  <site-socials/>
                </div>
              </div>

            </div>

            <div class="col-12 border-top py-2">
              <p class="text-gray-1 text-center mb-1 d-block">{{ footer_labels[2] }}</p>
              <p class="d-flex flex-column flex-sm-row  align-items-center justify-content-center">
                <img src="~/assets/images/mr_mrs_smith.png" class="img-fluid m-1">
                <img src="~/assets/images/XO-logo-sRGB_0.png" class="img-fluid m-1">
                <img src="~/assets/images/aficionados.png" class="img-fluid m-1">
              </p>
            </div>

            <div class="col-12 border-top py-2">
              <div class="text-center text-sm-right text-white pb-5 pb-sm-3">
                Copyright Crossing Manzoni - All right reserved -  P.IVA.: 05950050871 - CIN: IT015146B4CBIQTWEY -
                <nuxt-link to="privacy">
                 Privacy policy
                </nuxt-link>
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>

  </footer>


</template>

<script>
import gsap from "gsap"


export default {
  name: "SiteFooter",
  data () {
    return {

      show: false
    }
  },
  computed: {
    items(){
      return this.$store.getters['getMenuItemsByLang'](this.currentLang)
    },
    categories(){
      return this.$store.getters['getMenuItemsByLang'](this.currentLang,'categories')
    },
    footer_labels(){
      return this.contacts['footer_labels'][this.currentLang]
    },
    address_text(){
      return this.contacts.address[this.currentLang]
    }
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
