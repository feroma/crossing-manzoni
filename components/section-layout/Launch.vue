<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="container">
      <div class="bg-pattern bg-pattern-2"></div>
      <div class="row align-items-center">
        <div class="col-12 col-sm-4 offset-sm-2 text-center text-sm-left">

          <component
            v-if="(section.title && section.title.content )"
            :is="section.title.tag" :class="section.title.class">
            {{ section.title.content }}
          </component>
          <div
            v-if="section.body" v-html="section.body.html"
            :class="section.body.class"></div>

          <div
            class="pt-3"
            v-if="section.cta"
            :class="section.body.class">
            <nuxt-link
              v-if="section.cta"
              :to="section.cta.href">
              <arrow-label :label="section.cta.label"></arrow-label>
            </nuxt-link>
          </div>


        </div>

        <div class="col-12 col-sm-4">
          <picture-wrapper
            v-if="section.image"
            :item="section.image">
          </picture-wrapper>
        </div>
      </div>
    </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutLaunch",
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
