<template>
  <div :class="itemClass" v-if="show">

    <div class="category-button-list d-flex flex-wrap justify-content-sm-center" v-if="computedPanels.length>1">
      <button class="category_btn mr-1 mb-1 mr-sm-2 mb-sm-2"
              :class= "[btn.open ? 'active':'']"
              v-for="(btn, count)  in computedPanels"
              :key="'category-btn-'+btn.id"
              @click.stop.prevent="togglePanel(count)"
      >
        {{ btn.title }}
      </button>
    </div>

    <div class="category-panel _justify-content-sm-center scrollable-row" v-if="currentPanelNodeIds">

      <div
        v-for="id  in currentPanelNodeIds"
        :key="'node-'+id"
        :id="'node-'+id"
        class="location col-12 col-sm-6 col-md-4 py-3 _text-center">
        <h4 class="text-black text-uppercase">
          {{ item.nodes[id].title }}
        </h4>
        <p>
          <a :href="item.nodes[id].gmaps"
             target="_blank"
             class="d-flex _justify-content-center text-gray-4 align-items-start">
            <pin-gmaps/>
            <em class="d-inline-block">{{ item.nodes[id].address }}</em>
          </a>
        </p>
        <p v-html="item.nodes[id].description "/>


      </div>

    </div>
    <swipe class="d-block d-sm-none"></swipe>


  </div>
</template>

<script>

export default {
  name: "LayoutCategory",
  data () {
    return {
      show: false,
      current: 0,
      panels: []
    }
  },
  components: {},
  computed: {
    computedPanels () {
      return this.panels
    },
    currentPanelNodeIds () {
      return this.current !== false ? this.panels[this.current].childs : false
    },
    itemClass () {
      let itemClassDefault = ['item-layout', 'item-layout-' + this.item.layout]
      let response = itemClassDefault
      if (this.item.class) {
        response = [...itemClassDefault, ...this.item.class]
      }
      return response.join(' ')
    }
  },
  methods: {
    togglePanel (id) {

      this.panels.forEach((panel, count) => {
        if (id === count) {

          if (!panel['open']) {
            panel['open'] = true
            panel['toggle'] = this.line2
            this.current = id
          } else {
            panel['open'] = false
            panel['toggle'] = this.line1
            this.current = false
          }
        } else {
          panel['open'] = false
          panel['toggle'] = this.line1
        }
      })

    }
  },

  created () {
    this.item.items.forEach((item, count) => {
      let panel = JSON.parse(JSON.stringify(item))
      if (panel.open || panel.open === 'true') {
        this.current = count
        panel.open = false
      } else {
        panel.open = false
      }
      this.panels.push(panel)
    })
    this.show = true
  },
  mounted () {
    setTimeout(() => {
      if (this.current !== false) {
        console.clear()
        console.log('this.current', this.current)
        this.togglePanel(this.current)
      }
    }, 1)
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  }

}
</script>
<style>
</style>
