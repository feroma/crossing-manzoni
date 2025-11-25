<template>

  <svg  id="arrow"
       xmlns="http://www.w3.org/2000/svg"
       x="0px" y="0px"
       viewBox="0 0 14 21" xml:space="preserve">
            <polyline class="st0" points="12.8,12.8 7,18.1 1.2,12.8 " style="fill:none;stroke:#E5E5E5;stroke-width:3;stroke-miterlimit:10;"/>
             <line class="st0" x1="7" y1="17.9" x2="7" y2="0" style="fill:none;stroke:#E5E5E5;stroke-width:3;stroke-miterlimit:10;"/>
      </svg>

</template>

<script>
import gsap from "gsap"


export default {
  name: "Arrow",
  data () {
    return {

      show: false
    }
  },
  computed: {},
  methods: {},
  props: {},
  mounted () {
    this.show = true
    let anim = gsap.timeline({yoyo: true, repeat: -1})
    const el = this.$el
    // let q = gsap.utils.selector(el)

    anim.fromTo(el, {y: 0}, {y: '+=20', duration: 0.5, ease:'sine.inOut'})
  }
}
</script>

<style scoped>

</style>
