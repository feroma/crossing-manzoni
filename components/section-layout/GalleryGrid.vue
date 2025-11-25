<template>
  <component :is="sectionTag" :class="sectionClass" >

    <div class="container bg-white">
      <div class="row d-sm-none">
        <div class="col-12 col-sm-4" >
          <component
            v-for="(item,count)  in section.items"
            v-if="item.layout"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>

        </div>
      </div>
      <div class="row justify-content-center d-none d-sm-flex">
        <div class="col-12 col-sm-4" >
          <component
            v-for="(item,count)  in section.items"
            v-if="item.layout && item.col && item.col===1"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>

        </div>
        <div class="col-12 col-sm-4" >
          <component
            v-for="(item,count)  in section.items"
            v-if="item.layout && item.col && item.col===2"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>
        </div>
        <div class="col-12 col-sm-4" >
          <component
            v-for="(item,count)  in section.items"
            v-if="item.layout && item.col && item.col===3"
            :is="'layout-'+item.layout"
            :key="'item-'+count"
            :index="count"
            :item="item">
          </component>

        </div>
<!--        <div class="col-12 col-sm-4"  v-if="section.col2">-->
<!--          <component-->
<!--            v-for="(item,count)  in section.col2"-->
<!--            v-if="item.layout"-->
<!--            :is="'layout-'+item.layout"-->
<!--            :key="'item-'+count"-->
<!--            :index="count"-->
<!--            :item="item">-->
<!--          </component>-->
<!--        </div>-->
<!--        <div class="col-12 col-sm-4" v-if="section.col3">-->
<!--          <component-->
<!--            v-if="item.layout"-->
<!--            v-for="(item,count)  in section.col3"-->
<!--            :is="'layout-'+item.layout"-->
<!--            :key="'item-'+count"-->
<!--            :index="count"-->
<!--            :item="item">-->
<!--          </component>-->

        </div>
      </div>
    </div>


  </component>
</template>

<script>

export default {
  name: "SectionLayoutGalleryGrid",
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
