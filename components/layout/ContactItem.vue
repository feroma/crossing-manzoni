<template>
  <component :is="itemTag" class="contact-item d-flex align-items-start" :class="itemClass">
    <component
      v-if="item.icon"
     :is="'icon-'+item.icon"/>
    <div class="pt-1">
<!--      <arrow-label-->
<!--        v-if="(item.title && item.title.content )"-->
<!--        :class = "item.title.class"-->
<!--        stroke="#B2AD97"-->
<!--        :text-class = "item.title.text_class"-->
<!--        :label="item.title.content" />-->
      <p
        v-if="(item.title && item.title.content )"
       class="pl-2 mb-0"
        :class = "item.title.text_class"
        v-html="item.title.content" />
      <p v-if="(item.body && item.body.content )"
         class="pl-2 pt-1"
         :class = "item.body.class">
        {{item.body.content}}
      </p>
      <p v-if="(item.value && item.value.content )"
         class="pl-2 pb-2"
         v-html="item.value.content"
         :class = "item.value.class">
      </p>
    </div>

  </component>
</template>

<script>

export default {
  name: "LayoutContactItem",
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

    itemValue () {
      return this.item.value[this.currentLang] ? this.item.value[this.currentLang] : this.item.value
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
