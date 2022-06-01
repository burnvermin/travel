// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    phone: 501,
    tablet: 1250,
    other: Infinity
  },
  defaultBreakpoint: 'phone' // customize this for SSR
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
