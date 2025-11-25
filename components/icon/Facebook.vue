<template>
  <div class="icon icon-facebook">
    <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.52734 6.91326C8.52734 5.07909 10.0146 3.5918 11.8488 3.5918H13.712V6.0918H11.8488C11.3953 6.0918 11.0273 6.4598 11.0273 6.91326V6.9707H13.712V9.4707H11.0273V18.0089H8.52734V9.4707H7V6.9707H8.52734V6.91326Z"
            :fill="fill"/>
    </svg>
  </div>
</template>

<script>




export default {
  name: "IconFacebook",
  data () {
    return {
      show: false
    }
  },
  computed: {},
  methods: {},
  props: {
    fill: {
      type: String,
      default: '#ffffff'
    }
  },

}
</script>

<style scoped>

</style>
