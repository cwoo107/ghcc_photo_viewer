import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    // dynamic segments start with a colon
    { path: '/:id', component: App }
  ]
var router = new VueRouter({
    routes: routes,
    mode: 'history'
  })

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

