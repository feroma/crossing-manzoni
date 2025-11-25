<template>
  <div class="bordered-title-wrapper" :class="item.class">
    <component
      v-if="item.title"
      :is="item.title.tag"
      :class="item.title.class"
      class="text-center bordered-title"
    >
      {{item.title.content}}
    </component>
  </div>


</template>

<script>

export default {
  name: "LayoutBorderedTitle",
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
