<template>
  <component :is="sectionTag" :class="sectionClass">
<div class="container">
  <div class="row justify-content-center">
    <div :class="columnClass">
      <component
        v-if="section.items"
        v-for="(item,count)  in section.items"
        :is="'layout-'+item.layout"
        :key="'item-'+count"
        :index="count"
        :item="item">
      </component>
    </div>
  </div>
</div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutContainer",
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
  }

}
</script>
<style>
</style>
