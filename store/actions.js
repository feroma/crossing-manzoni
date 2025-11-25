//import Cookie from 'js-cookie'

//import {BToast, BToaster} from "bootstrap-vue"
const actions = {

  async nuxtServerInit ({commit}, {$axios}) {
    //console.log($axios)
    let payload = {
      action: 'get_main_navigation',
      isSsr: true,
      args: {}
    }
    const mainNav = await $axios.$post("", payload)
    commit('UPDATE_NAVIGATION', mainNav)
   // console.log('nuxtServerInit -> getMainNavigation', mainNav)
  },

  callApi (vuexContext, payload) {

    console.log('callApi PAYLOAD', payload)


    //il parametro isSsr determina se far apparire il loading screen
    if (!payload.isSsr) payload.isSsr = false

    return this.$axios
      .$post(
        '',
        payload
      )
      .then(data => {
        console.log('callApiNew > response', data)
        return data
      })
      .catch(e => {
        console.log('callApiNew > error', e)
        throw e
      })


  }

}

export default actions
