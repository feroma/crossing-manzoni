<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">
          <div class="bordered-list
          d-sm-flex flex-wrap
          align-items-start
          pt-4 p-3">
            <h3 class="no-wrap h5">{{section.title}}</h3>
            <div class="furniture-item"
                v-for="(item,count)  in section.items"
                 :class = "section.items_class"
                 :key="'item-'+count">
              <img
                :alt="stripHtml(item.description)"
                :title="stripHtml(item.description)"
                :src="svgSource(item.filename)"
                :class = "section.img_class"
              >
              <p :class = "section.p_class" class="h6" v-html="item.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutFurnitures",
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

    svgSource(filename) {
      return this.ImageBaseUrl+'/furniture/'+filename
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
