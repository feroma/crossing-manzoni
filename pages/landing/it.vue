<template>
  <div>
    <site-header/>
    <section id="welcome" class="section bg-gray-6 section-min-h">
      <div class="container-fluid">

        <div class="bg-image">
          <picture>
            <source
              :srcset="ImageBaseUrl+'/home_full_2x.jpg'"
              media="(min-width: 1920px)"/>
            <source
              :srcset="ImageBaseUrl+'/home_full_2x.jpg  2x, '+ImageBaseUrl+'/home_full.jpg'"
              media="(min-width: 1024px)"/>

            <img :srcset="ImageBaseUrl+'/home_portrait.jpg 2x'"
                 :src="ImageBaseUrl+'/home_mobile.jpg'"
                 alt="Welcome to Crossing Manzoni"/>
          </picture>
          <div class="grad-1"></div>
        </div>

        <div class="row align-items-center cc-3-cols">
          <div class="col-12 col-cc1"></div>
          <div class="col-12 col-cc2 text-center">
            <h1 class="text-gray-1" v-html="contents.section1.title"/>
          </div>
          <div class="col-12 col-cc1"></div>
        </div>

        <arrow/>

      </div>
    </section>

    <section id="manzoni" class="section bg-gray-2" _data-scroll-section>

      <div class="container bg-gray-1">
        <div class="bg-pattern bg-pattern-2"></div>
        <div class="row cc-4-cols">
          <div class="col-12 col-cc1"><span class="brickline"></span></div>
          <div class="col-12 col-cc2">
            <div class="d-flex flex-column h-100 justify-content-between">
              <div class="h-100 d-flex flex-column justify-content-center">
                <h2 class="head-anim" v-html="contents.section2.title"/>
                <p class="par-ind pr-5 pr-sm-2 pr-lg-5 d-block" v-html="contents.section2.par1"/>
              </div>
              <p class="text-small text-right d-none d-sm-block" v-html="contents.section2.par2"/>
            </div>

          </div>
          <div class="col-12 col-cc2 d-sm-flex">
            <img class="img-fluid align-self-end pb-2 pb-md-0"
                 :src="ImageBaseUrl+'/montenapoleone.jpg'">
            <p class="text-small d-block d-sm-none" v-html="contents.section2.par2"/>
          </div>
          <div class="col-12 col-cc1"></div>
        </div>
      </div>
    </section>


    <section class="section bg-gray-6" id="gallery-intro">
      <div class="container">
        <div class="row cc-3-cols">
          <div class="col-12 col-cc1"></div>
          <div class="col-12 col-cc2 align-self-end">
            <h2 class="text-center text-gray-1" v-html="contents.section3.title"/>
            <p class="text-center text-gray-1" v-html="contents.section3.par1"/>
          </div>
          <div class="col-12 col-cc1"></div>
        </div>
      </div>


      <div class="section bg-gray-6" id="gallery">
        <div class="container">
          <div class="row pt-0">
            <div class="gallery-item"
                 :style="'flex: 1 1 '+item.width_perc+'%; max-width:'+item.width_perc+'%;'"
                 v-for="item in gallery"
                 :key="item.filename"
            >
              <div class="gallery-item-wrapper">
                <!--              <img v-if="item.filename"-->
                <!--                   :alt="clearDesc(item.description)"-->
                <!--                   :title="clearDesc(item.description)"-->
                <!--                   :src="ImageBaseUrl+'/gallery/'+item.filename">-->

                <image-wrapper v-if="item.filename" :item="item"/>
                <span class="placeholder" v-else></span>

                <p v-if="item.description" class="text-small text-white" v-html="item.description"/>


              </div>


            </div>
          </div>
        </div>
        <swipe class="d-block d-sm-none"></swipe>
      </div>


    </section>

    <section class="section bg-gray-1" id="contacts">
      <div class="container">
        <div class="bg-pattern bg-pattern-1"></div>
        <div class="row cc-3-cols pb-0">
          <div class="col-12 col-cc1"></div>
          <div class="col-12 col-cc2">
            <h2 class="text-neg-ind" v-html="contents.section4.title"></h2>
            <div class="d-flex align-items-end mb-2">
              <p class="d-inline-block mr-2">
              Via Morone, 6<br>
              20121<br>
              Milano<br>
              </p>
              <gmaps-link class="text-brick stroke-brick"/>
            </div>


            <p>
              <a class="text-gray-6" href="mailto:info@crossingmanzoni.com">info@crossingmanzoni.com</a><br>
              <br>
              +39 02.50065416
            </p>
            <rome-link/>
          </div>
          <div class="col-12 col-cc1"></div>
        </div>
      </div>
    </section>


    <section class="section footer bg-gray-6 text-gray-1 px-2 px-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-12 logo-line">
            <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
          </div>
<!--          <div class="col-12 col-sm-6">-->
<!--            <p class="pr-sm-5" v-html="contents.section5.par1"/>-->
<!--          </div>-->
          <div class="col-12 col-sm-3">
            <div class="d-flex align-items-end mb-2 ">
              <p class="d-inline-block mr-2">
                Via Morone, 6<br>
              20121<br>
              Milano<br>
            </p>
              <gmaps-link class="text-gray-3 stroke-gray-3"/>
            </div>


          </div>
          <div class="col-12 col-sm-3">
            <p><a class="text-gray-1" href="mailto:info@crossingmanzoni.com">info@crossingmanzoni.com</a><br>
              <br>
              Tel.: +39 02.50065416
              <br>
              P.IVA.: 05950050871
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="end-div bg-gray-6" style="height: 10px">

    </div>
  </div>

</template>

<script>
/**
 * @see https://codesandbox.io/s/rcok0?file=/nuxt.config.js
 */

import locomotive from "@/mixins/locomotive.js"

export default {
  name: 'IndexPage',
  mixins: [locomotive],
  data () {
    return {
      show: false,
      scrollPosition: 0
    }
  },
  computed: {
    currentLang () {
      return this.$store.getters.getCurrentLanguage
    },

    contents () {
      return this.$store.getters.getContents
    },
    ImageBaseUrl () {
      let development = process.env.NODE_ENV !== 'production'
     // let base = development ? '/' : '/crossing-manzoni/'
      return  development ?  '/photos' : 'https://www.crossingmanzoni.it/photos'
    },

    gallery () {
      return this.$store.state.gallery
    }
  },
  created () {
    this.$store.commit('UPDATE_CURRENT_LANG', 'it')
  },
  methods: {
    clearDesc (desc) {
      //return desc;
      return desc.replace("<br>", " ")
    }
    /**
     * @see: https://codesandbox.io/s/nuxtjs-locomotive-scroll-t542g?file=/pages/index.vue:32-46
     */
    /*setLocomotiveScroll () {
      this.lmS = new this.locomotiveScroll({
        el: document.querySelector("#js-scroll"),
        smooth: true,
        multiplier: 0.1
      })
      console.log("lmS", this.lmS)
      this.lmS.on("scroll", () => {
        console.log("lmS", this.lmS)
      })
    }*/

  }


}
</script>

<style>

</style>
