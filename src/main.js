import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
})
