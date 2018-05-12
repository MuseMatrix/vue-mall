import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
import Details from '@/components/details/details'
import Spec from '@/components/details/spec'
import AfterService from '@/components/details/afterservice'
import Category from '@/components/category/Category'
import Assess from '@/components/assess/assess'
import CategoryList from '@/components/category/categorylist'
import Bill from '@/components/bill/bill'
import Order from '@/components/order/order'
import NowBuyModel from '@/components/product/nowbuymodel'
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
    },
    {
      path:'/spec',
      component:Spec
    },
    {
      path:'/afterservice',
      component:AfterService
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/assess',
      component:Assess
    },
    {
      path:'/categorylist',
      component:CategoryList
    },
    {
      path:'/bill',
      component:Bill
    },
    {
      path:'/order',
      component:Order
    }, 
    {
      path:'/nowbuymodel',
      component:NowBuyModel
    }
  ]
})
