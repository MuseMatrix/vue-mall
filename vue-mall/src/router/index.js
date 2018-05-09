import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
import Details from '@/components/details/details'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/product',
      component:Product
    },
    {
      path:'/details',
      component:Details
    }
  ]
})
