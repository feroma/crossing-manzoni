
<template>
  <a href="https://www.google.com/maps/place/Via+Gerolamo+Morone,+6,+20121+Milano+MI/@45.4683436,9.1924316,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b1ea692f47:0x56f70fe97b711acb!8m2!3d45.4683436!4d9.1924316!16s%2Fg%2F11c3q4klvl?entry=ttu"
     target="_blank"
     class="gmap-link d-flex align-items-center">
    <pin-gmaps/>
    <span class="d-block text-small"><strong>On Google Maps</strong></span>
  </a>

</template>

<script>
import gsap from "gsap"


export default {
  name: "GmapsLink",
  data () {
    return {

      show: false
    }
  },
  computed: {},
  methods: {},
  props: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
