<template>

  <div class="language-switcher ml-auto flex-grow-1">

    <a href="#"
       v-if="currentLang!=='en' && pageTranslationId"
       @click.prevent="changeLang('en')">Eng</a>
    <span v-else>Eng</span>


    <div class="divisore"></div>

    <a href="#"
       v-if="currentLang!=='it' && pageTranslationId"
       @click.prevent="changeLang('it')">Ita</a>
    <span v-else>Ita</span>

  </div>

</template>

<script>
export default {
  name: "LanguageSwitcher",
  data () {
    return {
      show: false
    }
  },
  props: {
    allowRouteChange: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentLang () {
      return this.$store.getters.getCurrentLanguage
    }
  },
  methods: {
    changeLang (lang) {

      console.log(this.$route)
      const name = this.$route.name
      const type = this.currentNavItem.type ?? 'main'
      const tNode = this.$store.getters['getMenuItemById'](this.pageTranslationId, type)

      console.log(tNode)
      if(this.allowRouteChange){
        this.$router.push(tNode.slug)
      }


    }
  }
}
</script>

<style scoped>

</style>
