<template>


  <a :href="'https://www.crossingcondotti.it/'+currentLang" class="rome-banner">

    <img :src="ImageBaseUrl+'/roma.jpg'" class="img-fluid">
    <span class="rome-link text-center">
          <span class="_text-small d-block">Visit our property in Rome</span>
          <span class="text-serif h4">Crossing Condotti</span>
        </span>
  </a>

</template>

<script>
export default {
  name: "RomeLink",
  data () {
    return {

      show: false
    }
  },
  computed: {
    currentLang () {

      return this.$store.getters.getCurrentLanguage === 'en'?'':this.$store.getters.getCurrentLanguage

    },
    ImageBaseUrl () {
      let development = process.env.NODE_ENV !== 'production'
      let base = development ? '/' : '/crossing-manzoni/'
      return base + development ? 'https://www.stage72.info/crossing-manzoni/photos' : '/photos'
    },
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
