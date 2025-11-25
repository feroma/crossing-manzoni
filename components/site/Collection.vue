<template>
  <section class="pre-footer pt-3">
    <div class="collection-launch container  py-3">
      <div class="row justify-content-center">
        <!--        =========== HEAD-->

        <div class="col-small collection-header d-flex flex-column align-items-center">
          <h2 class="text-center bordered-title">
            <img
              :alt="collection.title.content"
              :title="collection.title.content"
              :src="ImageBaseUrl+'/'+collection.title.logo"
            >
          </h2>
          <p class="text-center" v-html="description.html"></p>
        </div>

        <!--        =========== ITEMS-->
        <div class="collection-items col-small
         d-flex flex-column justify-content-center
          flex-sm-row">
          <collection-item
            v-for="item in items"
            :key="'collection-'+item.title"
            :item="item"
          />
        </div>

      </div>
    </div>
  </section>


</template>

<script>
//import gsap from "gsap"


export default {
  name: "SiteCollection",
  data () {
    return {

      show: false
    }
  },
  computed: {
    collection () {
      return this.$store.getters.getCollection
    },
    description(){
      return this.collection['description_'+this.currentLang]
    },
    items(){
      return this.collection['items_'+this.currentLang]
    }
  },
  methods: {},
  props: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
