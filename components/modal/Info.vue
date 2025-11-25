<template>
  <div id="info-modal" class="p-3" v-if="infoModal.show">
    <a href="#" class="info-modal-bg" @click.stop.prevent="toggleInfoModalStatus"></a>
    <div class="info-modal-content">
      <div class="info-modal-body bg-brick p-3 py-5 p-md-5 text-gray-1">
        <close @click.native.stop.prevent="toggleInfoModalStatus"/>
        <div v-html="infoModal.content"></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Info",
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    toggleInfoModalStatus () {
      this.$store.commit('SET_INFO_MODAL', {
          content: this.infoModal.content,
          show: !this.infoModal.show
        }
      )
    }
  },
  props: {},

}
</script>

<style scoped>

</style>
