import Vue from 'vue'
import App from './App.vue'
// import './assets/svg/iconfont.js'
import '@/assets/icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
