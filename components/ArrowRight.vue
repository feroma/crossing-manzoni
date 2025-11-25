<template>

  <svg  class="arrow-right"
       xmlns="http://www.w3.org/2000/svg"
       x="0px" y="0px"
       viewBox="0 0 21 14" xml:space="preserve">
        <path d="M14.5 1L20 7L14.5 13M1 7H19.5" :stroke="stroke"
              style="fill:none;stroke-width:1;"/>
      </svg>

</template>

<script>
//import gsap from "gsap"


export default {
  name: "ArrowRight",
  data () {
    return {

      show: false
    }
  },
  computed: {},
  methods: {},
  props: {
    stroke: {
      type: String,
      default: '#ffffff'
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
