import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import http from './http'
import './assets/sass/style.scss'
import './assets/fonts/iconfont.css'
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast, 1000)
Vue.use(Loading)
Vue.component('confirm', confirm)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
document.documentElement.style.fontSize = document.documentElement.clientWidth * 55 / 414 + 'px';
window.addEventListener('resize', () => {
  document.documentElement.style.fontSize = document.documentElement.clientWidth * 55 / 414 + 'px';
})

Vue.prototype.$http = http
router.beforeEach((to, from, next) => {
  if(to.name === 'cart' || to.name === 'mine' || to.name === 'user'){
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
