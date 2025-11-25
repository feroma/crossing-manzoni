<template>
  <nuxt-link
    :class="item.link_class??''"
    :to="ctaHref(item.cta)">
    <img
      :alt="clearDesc(description)"
      :class="item.class??''"
      :title="clearDesc(description)"
      :src="ImageBaseUrl+item.filename">
  </nuxt-link>

</template>

<script>


export default {
  name: "LayoutSimpleImage",
  data () {
    return {
      imageIsLoaded: false,
      show: false
    }
  },
  computed: {
      description(){
        return this.item.description ?? '';
      }
  },
  methods: {


  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
