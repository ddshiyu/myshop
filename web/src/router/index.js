import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category'
import goodsList from '../components/goodsList'
import goodsDetail from '../components/goodsDetail'
import cart from '../views/cart'
import mine from '../views/mine'
import login from '../views/login'
import user from '../views/user'
import commonts from '../views/commonts'
import newsDetail from '../views/newsDetail'
import newsPage from '../views/newsPage'
import searchResult from '../views/searchResult'

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
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/commonts',
    name: 'commonts',
    component: commonts
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: newsDetail
  },
  {
    path: '/newsPage',
    name: 'newsPage',
    component: newsPage
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: searchResult
  },
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
