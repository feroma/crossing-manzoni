<template>
  <component :is="sectionTag" :class="sectionClass">

   <div class="container">
      <div class="row">
        <div class="col-12 col-sm-4 mb-xs-gutter">
          <picture-wrapper v-if="section.items[0].filename" :item="section.items[0]"></picture-wrapper>
          <div :class="sentenceClasses.div" v-else>
            <div :class="sentenceClasses.text"
                 v-html="section.items[0].html"></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 mb-xs-gutter">
          <picture-wrapper v-if="section.items[1].filename" :item="section.items[1]"></picture-wrapper>
          <div :class="sentenceClasses.div" v-else>
            <div :class="sentenceClasses.text"
                 v-html="section.items[1].html"></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 mb-xs-gutter">
          <picture-wrapper v-if="section.items[2].filename" :item="section.items[2]"></picture-wrapper>
          <div :class="sentenceClasses.div" v-else>
            <div :class="sentenceClasses.text"
                 v-html="section.items[2].html"></div>
          </div>
        </div>
      </div>
   </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutGrid3",
  data () {
    return {
      show: false
    }
  },
  components: {},
  computed: {
    sentenceClasses(){
      return {
        'div' :'sentence d-flex align-items-center justify-content-center p-3 p-lg-5 h-100',
        'text':'text-serif h4 text-gray-5 text-center'
      }
    },
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
