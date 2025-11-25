<template>
  <div class="team-item d-flex flex-column flex-sm-row
   align-items-sm-center py-2">
    <img class="team-icon mr-sm-2 mb-2"
         :src="ImageBaseUrl+'/'+item.icon"/>
    <div class="team-item-info pb-4">
      <div
        v-if="item.title"
        class="h2 text-gray-5 mb-3">
        <em> {{ item.title }}</em>

      </div>
      <div v-if="item.body" v-html="item.body"></div>
      <div class="team-item-languages d-flex flex-wrap">
          <div
            v-if="item.languages && item.languages.length"
            v-for="(lang,count) in item.languages"
            :key="'cell-'+count"
            class="pill bg-brick-light text-white mr-1 mb-1">
            {{lang}}
          </div>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  name: "LayoutTeam",
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
