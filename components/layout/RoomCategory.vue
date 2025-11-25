<template>
  <div class="room-category" :class="item.class">
    <div class="row align-items-center">
      <div class="category-image col-12 col-sm-4">
        <picture-wrapper
          class="mb-2 mb-sm-0"
          v-if="item.image"
          :item="item.image">
        </picture-wrapper>
      </div>


      <div class="category-info pl-sm-3  col-12 col-sm-8">
            <div class="category-name text-center">
              <h2 class="mb-1">{{item.label}}</h2>
              <p v-if="item.desc">{{item.desc}}</p>
            </div>
            <div class="category-rooms d-flex flex-column align-items-center">
                <nuxt-link
                  v-for="room in item.child"
                  :key = "'room-'+room.id"
                  :to="room.slug"
                  class="py-1"
                >
                  <arrow-label  :label="room.label" />
                </nuxt-link>
            </div>

      </div>
    </div>

  </div>


</template>

<script>

export default {
  name: "LayoutRoomCategory",
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
    item: {
      type: Object,
      required: true
    }
  }

}
</script>
<style>
</style>
