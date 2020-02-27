import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SlideList from '../views/SlideList.vue'
import SlideEdit from '../views/SlideEdit.vue'
import ItemList from '../views/ItemsList.vue'
import ItemEdit from '../views/ItemsEdit.vue'
import AccountList from '../views/AccountList.vue'
import AccountEdit from '../views/AccountEdit.vue'
import NewsList from '../views/NewsList.vue'
import NewsEdit from '../views/NewsEdit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/slide/list',
        name: 'SlideList',
        component: SlideList
      },
      {
        path: '/slide/edit',
        component: SlideEdit
      },
      {
        path: '/slide/edit/:id',
        component: SlideEdit,
        props: true
      },
      {
        path: '/item/list',
        name: 'ItemList',
        component: ItemList
      },
      {
        path: '/item/edit',
        component: ItemEdit
      },
      {
        path: '/item/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/account/list',
        name: 'AccountList',
        component: AccountList
      },
      {
        path: '/account/edit',
        component: AccountEdit
      },
      {
        path: '/account/edit/:id',
        component: AccountEdit,
        props: true
      },
      {
        path: '/news/list',
        name: 'NewsList',
        component: NewsList
      },
      {
        path: '/news/edit',
        component: NewsEdit
      },
      {
        path: '/news/edit/:id',
        component: NewsEdit,
        props: true
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
