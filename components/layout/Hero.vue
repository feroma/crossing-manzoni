<template>
  <component :is="itemTag" :class="itemClass">
    <picture-wrapper
      v-if="item.image"
      :item="item.image">
    </picture-wrapper>

    <div
      v-if="(item.title && item.title.content ) || item.body"
      class="item-content item-content-abs d-flex align-items-center">
      <div class="container p-gutter">
        <div class="row align-items-center justify-content-center">
          <div :class="itemContentColumClass">
            <component
              v-if="(item.title && item.title.content )"
              :is="item.title.tag" :class="item.title.class"
              v-html="item.title.content">

            </component>
            <div v-if="item.body" v-html="item.body.html" :class="item.body.class"></div>
          </div>
        </div>
      </div>

    </div>
    <arrow/>
    <booking-row v-if="item.book_row"/>
    <div
      v-if="item.key_order !==undefined"
      style="z-index: 20; left: 0; top: 0"
      class="p-3 position-absolute bg-black text-white">
      {{item.key_order}}
    </div>
  </component>
</template>

<script>

export default {
  name: "LayoutHero",
  data () {
    return {
      show: false
    }
  },
  components: {},
  computed: {
    itemClass () {
      let itemClassDefault = ['item-layout','item-layout-' + this.item.layout]
      let response = itemClassDefault
      if (this.item.class) {
        response = [...itemClassDefault, ...this.item.class]
      }
      return response.join(' ')
    },

    itemTag () {
      return this.item.tag || 'div'
    },
    itemContentColumClass () {
      return this.item.column || 'col-12'

    }
  },
  methods: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
    }
  }

}
</script>
<style>
</style>
