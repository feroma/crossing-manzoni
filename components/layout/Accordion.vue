<template>
  <div class="accordion" v-if="this.show">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-small">

          <div class="accordion-item"
               :class="count === current ? 'active':''"
               v-for="(panel,count) in computedPanels"
               :key="'ai-'+count">
            <span :id="'ai-'+count" class="accordion-item-id"></span>
            <div
              @click.stop.prevent="togglePanel(count)"
              :class="count !== current ? 'border-bottom-gray-5':''"
              class="accordion-header  d-flex align-items-center justify-content-between py-2">
              <div class="accordion-header-col">
                <img class="accordion-icon mr-2"
                   :src="ImageBaseUrl+'/'+panel.icon"/>
              </div>
              <div class="h2 mb-0 accordion-header-col text-center">{{ panel.title }}</div>
              <div class="accordion-toggle accordion-header-col text-right">
                <svg width="48" height="20"
                     viewBox="0 0 48 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg" v-html="panel.toggle">
                </svg>
              </div>
            </div>
            <div :id="'accordion-panel-'+count" class="accordion-content position-relative border-bottom-gray-5 pt-2 mb-3" v-if="panel.open">
              <component
                v-if="panel.content"
                v-for="(content,content_count)  in panel.content"
                :is="'layout-'+content.layout"
                :key="'content-item-'+content_count"
                :index="content_count"
                :item="content">
              </component>
              <div class="accordion-close"  @click.stop.prevent="togglePanel(count)">Close</div>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  name: "LayoutAccordion",
  data () {
    return {
      show: false,
      current: false,
      panels: [],
      line1: '<line x1="10" y1="5" x2="48" y2="5" stroke="black" stroke-width="1"/>\n' +
        '                  <line x1="0" y1="15" x2="38" y2="15" stroke="black" stroke-width="1"/>',
      line2: '<line x1="0" y1="15" x2="48" y2="15" stroke="black" stroke-width="1"/>\n' +
        '                  <line x1="0" y1="15" x2="48" y2="15" stroke="black" stroke-width="1"/>'
    }
  },
  components: {},
  computed: {
    accordion () {
      // JSON.parse() Method
      return JSON.parse(JSON.stringify(this.item))
    },
    computedPanels(){
      return this.panels
    }

  },
  created () {
    this.item.items.forEach((item, count) => {
      let panel = JSON.parse(JSON.stringify(item))
      panel.toggle = this.line1;
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
    }, 1000)
  },
  methods: {
    panelIcon (id) {
      if (this.panels[id]['open']) {
        return this.line2
      } else {
        return this.line1
      }
    },
    togglePanel (id) {


      this.panels.forEach((panel, count) => {
        if(id === count ){
          if(!panel['open']){
            panel['open'] = true
            panel['toggle'] = this.line2
            this.current = id
          }else{
            panel['open'] = false
            panel['toggle'] = this.line1
            this.current = false
          }
        }else{
          panel['open'] = false
          panel['toggle'] = this.line1
        }
      })
      setTimeout( ()=>{
        document.getElementById('ai-'+id).scrollIntoView();
      },100)

    }

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
