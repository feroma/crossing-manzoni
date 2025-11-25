<template>
  <div class="table">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">

          <div class="row main-table-row">
            <div class="cell-item col-12 col-sm-6 p-3"

                 v-for="(cell,count) in item.items"
                 :class="count%2?'odd':'even'"
                 :key="'cell-'+count">
              <h4 class="text-sans text-center">{{cell.title}}</h4>
              <p class="text-center text-sm-left" v-html="cell.body"/>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  name: "LayoutTable",
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
