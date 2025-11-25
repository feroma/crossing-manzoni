<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="art-col mb-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-small  position-relative">
            <picture-wrapper
              v-if="section.image"
              :item="section.image">
            </picture-wrapper>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">

          <div class="art-description" v-if="section.title||section.body">

            <component
              v-if="section.title"
              :is="section.title.tag"
              :class="section.title.class"
              v-html="section.title.html">
            </component>
            <div
              v-if="section.body"
              :class="section.body.class"  v-html="section.body.html"></div>
          </div>

        </div>
      </div>

    </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutArt",
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
