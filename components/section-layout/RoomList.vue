<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="container">
      <div class="row justify-content-center">
        <div :class="columnClass">
          <h2 class="text-center h4 text-sans font-weight-normal text-uppercase text-brick-light bordered-title">
            {{ section.title }}
          </h2>
          <p class="text-center h5" v-if="section.body">
            {{ section.body }}
          </p>
        </div>
      </div>
      <div class="row d-sm-none">
         <layout-room-teaser
           v-for="room in rooms"
           v-if="room.id!==currentNavItem.id && room.thumb"
           :key="'room-'+room.id"
           :room = "room"/>
      </div>
      <div class="_row d-none d-sm-block">
        <vue-slick-carousel v-bind="carousel" ref="carousel" class="room-list-carousel">
          <template #prevArrow="arrowOption">
            <div class="custom-arrow">
             <arrow-left stroke="#80352D"/>
            </div>
          </template>


          <layout-room-teaser
            v-for="room in rooms"
            v-if="room.id!==currentNavItem.id && room.thumb"
            :key="'room-'+room.id"
            :room = "room"/>

          <template #nextArrow="arrowOption">
            <div class="custom-arrow">
              <arrow-right stroke="#80352D"/>
            </div>
          </template>

        </vue-slick-carousel>

      </div>
    </div>

  </component>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: "SectionLayoutRoomList",
  data () {
    return {
      show: false,
      carousel: {
        "arrows": true,
        "dots": true,
        //"dotsClass": "slick-dots custom-dot-class",
        "centerMode": true,
        "centerPadding": "48px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "speed": 500,
        "adaptiveHeight": true
      },
    }
  },
  components: {VueSlickCarousel},
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
    columnClass () {
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
  }

}
</script>
<style>
</style>
