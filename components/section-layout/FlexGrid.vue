<template>
  <component :is="sectionTag" :class="sectionClass">
<div class="container">
  <div class="row justify-content-center">
    <div :class="columnClass">
      <component
        v-if="section.titleBlock"

        :is="'layout-'+section.titleBlock.layout"
        :item="section.titleBlock">
      </component>



      <div class="d-flex flex-wrap align-items-center justify-content-center" v-if="section.items">
        <component
          :is="'layout-'+item.layout"
          v-for="(item,count)  in section.items"
          :key="'item-'+count"
          :item="item"/>
      </div>
      <div
        :class="section.cta.class"
        class="pt-3"
        v-if="section.cta">
        <a
          v-if="section.cta.target"
          :target="section.cta.target"
          :href="ctaHref(section.cta)">
          <arrow-label :label="section.cta.label"></arrow-label>
        </a>
        <nuxt-link
          v-else
          :to="ctaHref(section.cta)">
          <arrow-label :label="section.cta.label"></arrow-label>
        </nuxt-link>

      </div>


    </div>
  </div>
</div>

  </component>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import LayoutReview from '@/components/layout/Review.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "SectionLayoutFlexGrid",
  data () {
    return {
      show: false,
    }
  },
  components: {VueSlickCarousel, LayoutReview},
  computed: {
    sectionClass () {
      let sectionClassDefault = ['section-layout-' + this.section.layout]
      let response = sectionClassDefault
      if (this.section.class) {
        response = [...sectionClassDefault, ...this.section.class]
      }
      return response.join(' ')
    },
    sectionTag () {
      return this.section.tag || 'section'
    },
    columnClass(){
      return this.section.column || 'col-small'
    }
  },
  methods: {},
  props: {
    section: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  created () {
  }


}
</script>
<style>
</style>
