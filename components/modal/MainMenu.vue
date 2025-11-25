<template>
  <div id="menu-modal" class="bg-gray-5">



    <div class="menu-modal-content modal-content">

      <header class="header w-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="logo d-none d-sm-block">
              <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
            </div>
            <!--          <language-switcher/>-->
            <close @click.native.stop.prevent="toggleMenu" class="ml-auto"/>
          </div>
        </div>
      </header>

      <div class="container pt-4 pt-sm-0">
        <div class="row">
          <div class="col-12 col-sm-4 offset-md-2">
            <ul class="list-unstyled">
              <!-- ------------ home-->
              <li>
                <a  href="#" @click.stop.prevent="changeRoute(items[0].slug)" class="d-block text-brick-light hover-white text-serif h3 py-1 py-lg-2">
                  {{items[0].label}}
                </a>
              </li>

              <!-- ------------ ROOMS-->
              <li>
                <div class="cat-box d-flex  py-1">
                  <div class="cat-name w-50">
                    <div class="text-brick-light text-serif h3">{{categories[0].label}}</div>
                  </div>
                  <div class="rooms text-white w-50">

                    <ul class="list-unstyled">
                      <li v-for="(item, index) in categories[0].child" :key="'room-'+index">
                        <a href="#" @click.stop.prevent="changeRoute(item.slug)" class="d-block text-white hover-brick-light text-serif h3b py-1">
                          {{item.label}}
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
              </li>

              <li v-for="(cat, index) in categories" :key="'cat-'+index" v-if="index>0">
                <div class="cat-box d-flex  py-1">
                  <div class="cat-name w-50 py-2 pr-1">
                    <div class="h4 mb-0">{{cat.label}}</div>
                    <div v-if="cat.desc" class="p">{{cat.desc}}</div>
                  </div>
                  <div class="rooms  w-50">

                    <ul class="list-unstyled">
                      <li v-for="(item, index) in cat.child" :key="'room-'+index">
                        <a href="#" @click.stop.prevent="changeRoute(item.slug)" class="d-block text-white hover-brick-light text-serif h3b py-1">
                          {{item.label}}
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>

              </li>

            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-4
          pl-sm-3 pl-lg-5 d-flex flex-column justify-content-between">
            <ul class="list-unstyled  d-sm-block pb-3">
              <li v-for="(item, index) in items" :key="'item-'+index" v-if="index>0 && !item.hide">
                <a  href="#" @click.stop.prevent="changeRoute(item.slug)" class="d-block text-brick-light hover-white text-serif h3 py-1 py-lg-1 pr-2">
                  {{item.label}}
                </a>
              </li>
            </ul>
            <div class="menu-book-block d-md-none">
              <book-link class="mb-2"/>
              <site-socials/>
            </div>
          </div>
        </div>

        <div class="menu-book-block d-none d-md-block">
          <book-link class="mb-2"/>
          <site-socials/>
        </div>

      </div>


    </div>

  </div>
</template>

<script>


export default {
  name: "MainMenu",
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
    }
  },
  methods: {
    changeRoute(to){
      if(this.$store.state.siteOptions.currentSlug === to){
        this.$store.commit('TOGGLE_MENU')
      }else{
        this.$router.push(to)
      }
    },
    toggleMenu(){
      this.$store.commit('TOGGLE_MENU')
    }
  },
  props: {},

}
</script>

<style scoped>

</style>
