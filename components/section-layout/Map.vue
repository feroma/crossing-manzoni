<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="map-col mb-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-small position-relative">
            <picture-wrapper
              v-if="section.image"
              :item="section.image">
            </picture-wrapper>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>

export default {
  name: "SectionLayoutMap",
  data () {
    return {
      show: false
    }
  },
  components: {},
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
    }
  },
  methods: {
    stripHtml (str) {
      str = str.replace("<br>", " ")
      return str.replace(/(<([^>]+)>)/gi, "")
    },
  },
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
