import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SlideList from '../views/SlideList.vue'
import SlideEdit from '../views/SlideEdit.vue'
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
