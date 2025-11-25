<template>
  <component :is="sectionTag" :class="sectionClass">
    <h3>{{section.title}}</h3>
    <div class="gallery-row">
      <div class="gallery-item"
           v-for="(item, count) in section.items"
           :key="'gall-'+count">
        <picture-wrapper :item="item"></picture-wrapper>
      </div>
    </div>
   <div class="gallery-container">
     <swipe class="d-block _d-sm-none"></swipe>
   </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutGallery1",
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
