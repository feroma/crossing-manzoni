<template>
  <div id="media-modal" class="bg-gray-5 justify-content-start">
    <div class="media-modal-content modal-content">

      <header class="header w-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="logo d-none d-sm-block">
              <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
            </div>
            <!--          <language-switcher/>-->
            <close @click.native.stop.prevent="toggleMediaModal" class="ml-auto"/>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-12 _col-lg-9 _offset-lg-1">
            <picture-wrapper
              class="mb-2 media-box"
              v-if="mediaModal.media"
              :item="mediaModal.media">
            </picture-wrapper>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Media",
  data () {
    return {

      show: false
    }
  },
  computed: {

  },
  methods: {
    toggleMediaModal(){
      this.$store.commit('TOGGLE_MEDIA_MODAL')
    }
  },
  props: {},

}
</script>

<style scoped>

</style>
