<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">
          <ul class="list-unstyled feature-list py-2 py-md-5">
            <li  class="text-center pt-2 px-2 p-sm-3"
                v-for="(item,count)  in section.items"
                 :key="'item-'+count">
              <h3 class="text-black font-weight-light">{{item.title}}</h3>
              <div  v-html="item.html"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutFeatures",
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
