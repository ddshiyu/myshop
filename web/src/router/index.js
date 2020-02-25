import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category'
import goodsList from '../components/goodsList'
import goodsDetail from '../components/goodsDetail'
import cart from '../views/cart'
import mine from '../views/mine'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/index',
  //   name: 'Home',
  //   redirect: '/'
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    redirect: '/category/1',
    children: [
      {path: '/category/:id', component: goodsList, props: true}
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: goodsDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
