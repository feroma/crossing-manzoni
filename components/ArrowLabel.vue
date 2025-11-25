<template>
    <span class="arrow-label d-inline-block position-relative">
      <span class="arrow-label-text" :class="textClass">{{label}}</span>
      <span class="arrow-label-icon" :style="'border-color: '+stroke+';'">
        <arrow-right :stroke="stroke"/>
      </span>
    </span>
</template>

<script>
import gsap from "gsap"


export default {
  name: "ArrowLabel",
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
      default: '#D37B65'
    },
    textClass: {
      type: String,
      default: 'text-gray-5 text-uppercase'
    },
    label: {
      type: String,
      required:true,
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
