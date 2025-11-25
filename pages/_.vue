<template>
  <div v-if="show">
    <site-header class="main-header"/>
    <!--    404 -->
    <div v-if="!currentNavItem">
      <section>
        <div class="container d-flex align-items-center">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
              <h1 class="text-gray-1">404</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="sections-wrapper" v-else>
      <component
        v-for="(section,count) in currentPage.sections"
        :key="'section-'+count"
        v-bind:is="'section-layout-'+section.layout"
        :section="section" :index="count"
      ></component>
    </div>




    <site-collection v-if="!currentPage.options || !currentPage.options.hideCollection"/>
    <site-footer/>

    <div v-if="nav.tree">
      <ul class="list-unstyled d-none">
        <li v-for="(item, index) in nav.tree" :key="'item-'+index">
          <nuxt-link :to="item.slug">
            {{item.label}}
          </nuxt-link>
        </li>
        <li v-for="(item, index) in nav.rooms.tree" :key="'room-'+index">
          <nuxt-link :to="item.slug">
            {{item.label}}
          </nuxt-link>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
/**
 * @see https://codesandbox.io/s/rcok0?file=/nuxt.config.js
 */
import locomotive from "~/mixins/locomotive.js"

export default {
  name: 'Page',
  // mixins: [locomotive],
  data () {
    return {
      show: false,
      scrollPosition: 0,
      test: {},
      path: [],
      navItem: {},
      nav: this.$store.getters.getFullNavigation,
      thisMetas:[

      ]
    }
  },
  head(){
    return this.thisMetas

  },
  watch: {
    'currentSlug' (val) {
      //console.clear()
      console.log('WATCH currentSlug')
    },
    '$route' (to) {
      //console.clear()
      console.log('WATCH $route')
      //this.checkRoute(to)
      this.$fetch()
    }
  },
  computed: {

  },
  created () {
    console.log('=================================================')
    this.show = false
    this.$fetch()
  },
  methods: {
    checkRoute (route) {
      this.path = route.fullPath.split('/')
      this.path.shift()
      console.log('route: ', route)
      let fullPath = this.clearSlug(route.fullPath)

      this.$store.commit('UPDATE_CURRENT_SLUG', fullPath)




      this.navItem = this.$store.getters['getMenuItemBySlug'](fullPath)
      console.log('fullPath: ', fullPath)
      console.log('navItem: ', this.navItem)

      this.$store.commit('SET_MENU', false)
      this.updateLanguage()
      // if (nextMenuItem) {
      //   this.$fetch()
      // }else{
      //   this.show = true
      // }

      //
    },
    updateLanguage () {
      let lang = ''
      if (this.navItem) {
        lang = this.navItem.lang
      } else if (this.$store.getters['isLanguageActive'](this.path[0])) {
        lang = this.path[0]
      }
      if (lang) {
        this.$store.commit('UPDATE_CURRENT_LANG', lang)
        if (lang === 'en') {
          lang = ''
        }
      }
    },
    updateMetas(){
      if(this.currentPage.meta){
        let metas = []
        Object.keys(this.currentPage.meta).forEach( (key) => {
          let meta = this.currentPage.meta[key];
          if(key === 'image' || key === 'og:image'){
            meta = this.ImageBaseUrl+'/meta/'+meta
          }
          metas.push(
            {
              hid:key,
              name:key,
              content:meta,
            }
          )
        })
        this.thisMetas = {
          title:this.currentPage.title,
          meta: metas
        }



      }else{
        this.thisMetas = {
          title:'Crossing Manzoni',
          meta:[],
        }
      }

      /**
       * generale URL
       */
      this.thisMetas.meta.push(
        {
          hid:'url',
          name:'url',
          content:'https://www.crossingmanzoni.it'+this.navItem.slug,
        },
        {
          hid:'og:url',
          name:'og:url',
          content:'https://www.crossingmanzoni.it'+this.navItem.slug,
        }
      )
    }
  },
  async fetch () {
    /*this.checkRoute(this.$route)
    //this.id = this.$route.params.id

    const slug = this.navItem.slug
    const id = this.navItem.id*/
    console.log('fetch', this.$route);

    let fullPath = this.clearSlug(this.$route.fullPath)
    console.log('fetch FP',fullPath);
    /**
     * PATCH URL
     * */

    const payload = {
      action: 'get_page',
      slug: fullPath
      //id
    }


    //const post = await this.$store.dispatch('callApi', 'disco-json/' + this.id)
    const post = await this.$store.dispatch('callApi', payload)
      .then(data => {
        if (data.error) {
          this.$router.push('/')
        } else {
          // console.clear()
          console.log('PAGE', data.page)
          this.$store.commit('UPDATE_CURRENT_PAGE', data.page)

          if (!this.$store.state.navigation.tree) {
            console.log('==============================UPDATE NAVIGATION')
            this.$store.commit('UPDATE_NAVIGATION', data.nav)
          }

          this.checkRoute(this.$route)

          /**
           */
          this.$nextTick(() => {
            this.updateMetas()
            this.show = true
          })
        }


      })
      .catch((e) => {
        console.log(e)
        // this.$router.push('/')
      })

  }

}
</script>

<style>

</style>
