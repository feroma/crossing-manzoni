<template>
  <div id="swipe">
  <svg  id="swipe-svg"
       xmlns="http://www.w3.org/2000/svg"
       x="0px" y="0px"
       viewBox="0 0 21 21" xml:space="preserve">


      <path class="hand" d="M15.2,10.7h-3.6V6.2c0-0.8-0.6-1.4-1.4-1.4S8.7,5.4,8.7,6.2v6.4l-1-1.1c-0.6-0.7-1.7-0.8-2.4-0.2
	s-0.8,1.7-0.2,2.4l3.6,4.1c0.2,0.6,0.7,1,1.4,1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0h4.6c1,0,1.9-0.8,1.9-1.9v-4.4
	C17,11.5,16.2,10.7,15.2,10.7z"/>
      <polyline class="st1" points="4,8.8 1.4,6.2 4,3.6 "/>
      <line class="st0" x1="1.4" y1="6.2" x2="6.1" y2="6.2"/>
      <polyline class="st1" points="16.8,3.6 19.4,6.2 16.8,8.8 "/>
      <line class="st0" x1="19.4" y1="6.2" x2="14.7" y2="6.2"/>



      </svg>
  </div>
</template>

<script>


import gsap from "gsap"

export default {
  name: "Swipe",
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
     let q = gsap.utils.selector(el)

    anim.fromTo(q('.hand'), {x: -2}, {x: 2, duration: 1, ease:'sine.inOut'})
  }
}
</script>

<style scoped>

</style>
