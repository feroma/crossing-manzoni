<template>
  <component :is="sectionTag" :class="sectionClass">

    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="(item,count)  in section.items"
          :key="'item-'+count"
          class="col-12 col-sm-6 col-md-4 col-lg-3">
          <component
            :is="'layout-'+item.layout"
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
  name: "SectionLayoutPressGrid",
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
