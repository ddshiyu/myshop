import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SlideList from '../views/SlideList.vue'
import SlideEdit from '../views/SlideEdit.vue'
import ItemList from '../views/ItemsList.vue'
import ItemEdit from '../views/ItemsEdit.vue'
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
