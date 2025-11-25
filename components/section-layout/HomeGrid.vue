<template>
  <component :is="sectionTag" :class="sectionClass">

    <div class="container">
      <div class="row d-sm-none">
        <div class="col-12">
          <component
            v-if="section.col_sm"
            v-for="(item,count)  in section.col_sm"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>

        </div>
      </div>
      <div class="row justify-content-center d-none d-sm-flex">

        <div class="col-12 col-sm-6">

          <component
            v-if="section.col1"
            v-for="(item,count)  in section.col1"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>


        </div>
        <div class="col-12 col-sm-6">
          <component
            v-if="section.col2"
            v-for="(item,count)  in section.col2"
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
  name: "SectionLayoutHomeGrid",
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
