<template>
  <div class="picture-wrapper" :class="item.class">
    <picture style="opacity: 0">

<!--      <source media="(min-width: 480px)" srcset="medium.jpg">-->
<!--      <source media="(min-width: 1024px)" srcset="large.jpg">-->
<!--        <source media="(orientation: portrait)" :srcset="portraitSource">-->
<!--        <source media="(orientation: landscape)" :srcset="landscapeSource">-->
      <source  media="(max-width: 1023px)" :srcset="smallSource">
      <source media="(min-width: 1024px)" :srcset="largeSource">

      <img
        :alt="clearDesc(item.description)"
        :title="clearDesc(item.description)"
        src="~/assets/images/fallback.png"
        @load="imageLoaded"
      >


    </picture>
    <div class="loading-box" v-if="!imageIsLoaded && !hideLoading">
      <span>loading</span>
    </div>

  </div>


</template>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  name: "PictureWrapper",
  data () {
    return {
      imageIsLoaded: false,
      show: false
    }
  },
  // watch: {
  //   start (newVal, OldVal) {
  //     if (newVal && this.imageIsLoaded) {
  //       this.animate()
  //     }
  //   },
  //   imageIsLoaded (newVal, OldVal) {
  //     if (newVal && this.start) {
  //       this.animate()
  //     }
  //   }
  // },
  computed: {
    smallSource() {
      return this.ImageBaseUrl+'/sm/'+this.item.filename
    },
    largeSource() {
      return this.ImageBaseUrl+'/lg/'+this.item.filename
    },


  },
  methods: {

    imageLoaded (e) {
      // console.clear()
      // console.log('loaded', e)
      this.$nextTick(() => {
        this.imageIsLoaded = true
        this.animate()
      })
    },
    animate () {
      this.show = true
      let anim = gsap.timeline()
      const el = this.$el
      let q = gsap.utils.selector(el)
      anim.set(q('picture'), {opacity: 0})
      anim.to(q('picture'), {
        opacity: 1, duration: 2
      })

    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    start: {
      type: Boolean,
      default: false
    },
    hideLoading: {
      type: Boolean,
      default: false
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
