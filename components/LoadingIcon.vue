<template>

  <svg  id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       x="0px" y="0px" viewBox="0 0 100 100"  xml:space="preserve">
  <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
  </circle>
    <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
  </circle>
    <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
  </circle>
</svg>

</template>

<script>


export default {
  name: "LoadingIcon",
  data () {
    return {
      show: false
    }
  },
  computed: {},
  methods: {},
  props: {}

}
</script>

<style scoped>

</style>
