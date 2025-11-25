<template>
  <component :is="sectionTag" :class="sectionClass">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">
          <div class="bordered-list pt-4 p-3">
            <h3 class="h5">{{ section.title }}</h3>

            <div class="row">
              <div class="col-12 col-sm-6">
                <ul class="list-unstyled pt-2 py-sm-2 py-md-3">
                  <li
                    class="text-center p-1"
                    v-for="(item,count)  in section.items1" :key="'item1-'+count"
                    v-html="item"
                  >

                  </li>
                </ul>
              </div>

              <div class="col-12 col-sm-6">
                <ul class="list-unstyled pb-2 py-sm-2 py-md-3">
                  <li
                    class="text-center p-1"
                    v-for="(item,count)  in section.items2" :key="'item1-'+count"
                    v-html="item"
                  >

                  </li>
                </ul>
              </div>

              <div class="col-12 amenities-body py-3" v-if="section.body">
                <div :class="section.body.class"  v-html="section.body.html"></div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutAmenities",
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
