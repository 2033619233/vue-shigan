import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/Upload.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "about" */ '../views/my/My.vue')
  },
  {
    path: '/uploadgood',
    name: 'My',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/UploadGoods.vue'),
    children: [
      {
        path: '/uploadgood/',
        name: 'My',
        component: () => import(/* webpackChunkName: "about" */ '../views/upload/childComponents/Input.vue')
      },
      {
        path: '/uploadgood/2',
        name: 'My',
        component: () => import(/* webpackChunkName: "about" */ '../views/upload/childComponents/Test.vue')
      },
    ]
  },
  {
    path: '/detail',
    name: 'My',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Detail.vue')
  },
  {
    path: '/upload2',
    component: () => import(/* webpackChunkName: "about" */ '@/views/leve2/upload.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
