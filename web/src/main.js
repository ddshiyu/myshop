import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import http from './http'
import './assets/sass/style.scss'
import './assets/fonts/iconfont.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

Vue.prototype.$http = http
router.beforeEach((to, from, next) => {
  if(to.name === 'cart' || to.name === 'mine'){
    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
