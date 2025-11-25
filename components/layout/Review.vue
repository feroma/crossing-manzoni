<template>
  <div class="review px-4 px-sm-5" :class="item.class">

    <div class="review-body text-serif text-center mb-2 position-relative">
      <icon-quote-open/>
      <em>
        {{item.body}}
      </em>
      <icon-quote-close/>
    </div>
    <div class="review-author p text-sans text-center mb-1">

        {{item.author}}

    </div>

  </div>
</template>

<script>

export default {
  name: "LayoutReview",
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
