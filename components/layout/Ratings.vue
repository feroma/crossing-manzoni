<template>
  <div class="ratings  row  justify-content-center flex-wrap" :class="item.class">

    <div class="rating-item text-center col-12 col-sm-4"
         v-for="(rate,count)  in item.items"
         :key="'item-'+count">

      <div class="rate-title text-serif h3 mb-1 font-weight-light">
        {{rate.title}}
      </div>
      <p class="rate-body mb-2" v-html="rate.body"/>
      <img
        :alt="stripHtml(rate.image.description)"
        :title="stripHtml(rate.image.description)"
        :src="svgSource(rate.image.filename)"
        class="mb-1"
      >


    </div>

  </div>
</template>

<script>

export default {
  name: "LayoutRatings",
  data () {
    return {
      show: false,
    }
  },
  components: {},
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    svgSource(filename) {
      return this.ImageBaseUrl+'/ratings/'+filename
    },
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>
<style>
</style>
