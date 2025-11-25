<template>
  <component :is="sectionTag" :class="sectionClass">

    <component
      v-if="section.items"
      v-for="(item,count)  in section.items"
      :is="'layout-'+item.layout"
      :key="'item-'+count"
      :index="count"
      :item="item">
    </component>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutDefault",
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
