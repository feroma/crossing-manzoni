/**
 * INTERCEPTORS
 * https://axios.nuxtjs.org/extend
 */
let development = process.env.NODE_ENV !== 'production'
const debugWaitMs = 1000
/**
 * @see https://github.com/vuejs/vuex/issues/1399#issuecomment-449972993
 */
export default function ({store, app: {$axios, redirect}}) {

  // $axios.setHeader({ContentType: 'application/json; charset=utf-8'})

  $axios.onRequest(config => {
    //console.log('Making request to ', config)
    //config.headers.common.ContentType = "application/json; charset=utf-8"
    //config.headers.common["Content-Type"] = "application/json; charset=utf-8"
    //config.headers.common ={}
    //console.log( config.headers)


    if(!config.data.isSsr){
      store.commit('SET_LOADING_STATUS', true)
    }


    /**
     * aggiungo il token alle request
     */
    if (development) {
      config.data.is_debug = true
    }
    console.log('$axios.onRequest ', config)
    //console.log('Making request TOKEN ', activeToken)
    //console.log('Making request DATA ', config.data)
  })

  $axios.onResponse(config => {
    console.log('$axios.onResponse ', config)
    setTimeout(()=>{
      store.commit('SET_LOADING_STATUS', false)
      if(config.data.error && config.data.message){
        const info = {
          content: config.data.message || config.data.error,
          show: true,
        }
        store.commit('SET_INFO_MODAL', info)
      }
    },debugWaitMs)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.error('$axios.onError ', error.response)
    console.error('$axios.onError -> code', code)
    setTimeout(()=>{
      store.commit('SET_LOADING_STATUS', false)
    },debugWaitMs)
    /* if (code === 404) {
       console.error('NOT FOUND ')
        redirect( 'error/404')
     }
     if (code === 500) {
         redirect('/error/500')
     }*/
  })
}
