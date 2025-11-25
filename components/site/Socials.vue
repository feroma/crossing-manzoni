<template>
  <div class="socials d-flex align-items-center">
        <div class="text-gray-1 h4 mb-0 mr-2">Follow us </div>
        <div v-for="(url,social,count) in socials" :key="'s-'+count">
          <a :href="url" target="_blank" :title="social" class="d-block">
            <component v-bind:is="'icon-'+social"></component>
          </a>
        </div>
  </div>
</template>

<script>




export default {
  name: "SiteSocials",
  data () {
    return {
      show: false
    }
  },
  computed: {
    socials(){
      const s = this.$store.getters['getFullNavigation']
      // console.clear()
      // console.log(s)
      return s['socials_'+this.currentLang]
    }
  },
  methods: {},
  props: {},

}
</script>

<style scoped>

</style>
