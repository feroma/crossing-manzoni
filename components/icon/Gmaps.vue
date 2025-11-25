<template>
  <div class="icon icon-gmaps">
    <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">



      <path d="M11 4C8.239 4 6 6.26303 6 9.05615C6 10.1602 6.35428 11.5696 6.94846 12.4018L11 19L15.0515 12.4018C15.0515 12.4018 16 10.9721 16 9.05615C16 6.26303 13.761 4 11 4ZM11 11.1384C9.86272 11.1384 8.94092 10.2062 8.94092 9.05615C8.94092 7.90499 9.86272 6.97282 11 6.97282C12.1373 6.97282 13.0591 7.90499 13.0591 9.05615C13.0591 10.2062 12.1373 11.1384 11 11.1384Z" :fill="fill"/>


    </svg>
  </div>
</template>

<script>




export default {
  name: "IconGmaps",
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
