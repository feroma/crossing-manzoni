<template>

  <div class="press-teaser text-center p-2 p-md-4">
    <picture-wrapper
      class="mb-2 border-gold grayscale"
      v-if="item.cover"
      :item="item.cover">
    </picture-wrapper>
      <div class="h4 mb-2 text-serif">
        {{item.title}}
      </div>
    <a href="#" @click.prevent.stop="openMediaModal">
      <arrow-label :label="cta_label"/>
    </a>

    </div>



</template>

<script>

export default {
  name: "LayoutPressTeaser",
  data () {
    return {
      show: false,
    }
  },
  components: {},
  computed: {
      cta_label(){
        return this.item['cta_label_'+this.currentLang]
      }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    openMediaModal(){
      const payload =  {
          show:true,
          media: this.item.image,
          gallery: [],
          initial: 0
      }
      this.$store.commit('SET_MEDIA_MODAL', payload)
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>
<style>
</style>
