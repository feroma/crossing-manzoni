<template>
  <div class="image-frame">
    <picture style="opacity: 0">
      <img
        :alt="clearDesc(item.description)"
        :title="clearDesc(item.description)"
        :src="ImageBaseUrl+'/gallery/'+item.filename"
        @load="imageLoaded"
      >


    </picture>
    <div class="loading-box" v-if="!imageIsLoaded && !hideLoading">
      <loading-icon/>
    </div>

  </div>


</template>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  name: "ImageFrame",
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

    ImageBaseUrl () {
      let development = process.env.NODE_ENV !== 'production'
      let base = development ? '/' : '/crossing-manzoni/'
      return development ? '/photos' : 'https://www.crossingmanzoni.it/photos'
    }

  },
  methods: {
    clearDesc (desc) {
      //return desc;
      return desc.replace("<br>", " ")
    },
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
