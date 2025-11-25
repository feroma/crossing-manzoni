<template>
  <component :is="itemTag" :class="itemClass">
    <picture-wrapper
      v-if="item.image"
      :item="item.image">
    </picture-wrapper>

    <div
      v-if="(item.title && item.title.content ) || item.body || item.cta"
      class="item-content d-flex align-items-center">
      <div class="container p-gutter">
        <div class="row align-items-center justify-content-center">
          <div :class="itemContentColumClass">
            <component
              v-if="(item.title && item.title.content )"
              :is="item.title.tag"
              v-html="item.title.content"
              :class="item.title.class">

            </component>
            <div v-if="item.body" v-html="item.body.html" :class="item.body.class"></div>
            <div
              :class="item.cta.class"
              class="pt-3"
              v-if="item.cta">
              <a
                v-if="item.cta.target"
                :target="item.cta.target"
                :href="ctaHref(item.cta)">
                <arrow-label :label="item.cta.label"></arrow-label>
              </a>
              <nuxt-link
                v-else
                :to="ctaHref(item.cta)">
                <arrow-label :label="item.cta.label"></arrow-label>
              </nuxt-link>

            </div>

          </div>
        </div>
      </div>

    </div>
  </component>
</template>

<script>

export default {
  name: "LayoutDefault",
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
  methods: {

  },
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
