<template>
  <a
    :href="item.url" target="_blank"
    class="collection-item px-2  px-md-3  px-lg-4  px-xl-5
          d-flex flex-sm-column align-items-center
          text-center
          text-gray-5 hover-brick">
    <img
      :alt="item.title+' '+item.description"
      :title="item.title+' '+item.description"
      :src="ImageBaseUrl+'/'+item.filename"
      class="full-rounded mb-1 d-inline-block img-fluid"
    >
    <span class="d-flex flex-column">
      <span class="h3">
            <img
              :alt="item.title"
              :title="item.title"
              class="img-fluid d-inline-block"
              :src="ImageBaseUrl+'/'+item.logo"
            >
          </span>
    <span class="p">
            {{item.description}}
          </span>
    </span>


  </a>
</template>

<script>

export default {
  name: "CollectionItem",
  data () {
    return {
      show: false
    }
  },
  components: {},
  computed: {},
  methods: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
    }
  }

}
</script>
<style>
</style>
