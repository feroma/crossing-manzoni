<template>
  <a href="#" class="book-link" @click.stop.prevent="openBooking">
    {{languageLabel }}
  </a>


</template>

<script>
import gsap from "gsap"


export default {
  name: "BookLink",
  data () {
    return {

      show: false
    }
  },
  computed: {
    languageLabel(){
      return this.currentLang === 'it' ? 'PRENOTA ORA' : 'BOOK NOW'
    }
  },
  methods: {

  },
  props: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
