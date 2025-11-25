<template>
  <nuxt-link
    :to="room.slug"
    class="room-teaser d-flex flex-column position-relative"
  >
    <picture-wrapper
      class="mb-2 mb-sm-0"
      v-if="room.thumb"
      :item="room.thumb">
    </picture-wrapper>
    <span class="room-info text-center">
      <span class="h3 mb-1 text-serif text-white">
        {{room.label}}
      </span>
      <span class="p mb-0 text-sans text-white">
        {{room.cat_info.label}}
      </span>
    </span>


  </nuxt-link>



</template>

<script>

export default {
  name: "LayoutRoomTeaser",
  data () {
    return {
      show: false,
    }
  },
  components: {},
  computed: {

  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  props: {
    room: {
      type: Object,
      required: true
    }
  }

}
</script>
<style>
</style>
