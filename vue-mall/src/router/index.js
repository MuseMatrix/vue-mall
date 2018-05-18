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
import Message from '@/components/message/message'
import PaySuccess from '@/components/pay/paysuccess'
import Search from '@/components/search/search'
import Share from '@/components/share/share'
import LoadFail from '@/components/share/loadfail'
import Payment from '@/components/order/Payment'
import SurePay from '@/components/order/surepay'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path:'/product',
      name:"product",
      component:Product
    },
    {
      path:'/details',
      name:'details',
      component:Details,
/*     linkActiveClass: 'mui-active',
      children:[//子路由
        {path:'/spec',component:Spec},
        {path:'/afterservice',component:AfterService}
      ]*/
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
      path:'/',
      component:Category
    },
    {
      path:'/assess',
      component:Assess
    },
    {
      path:'/categorylist',
      name:"categorylist",
      component:CategoryList
    },
    {
      path:'/bill',
      name:'bill',
      component:Bill
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/nowbuymodel',
      component:NowBuyModel
    },
    {
      path:'/message',
      component:Message
    },
    {
      path:'/paysuccess',
      component:PaySuccess
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/share',
      component:Share
    },
    {
      path:'/loadfail',
      component:LoadFail
    },
    {
      path:'/payment',
      component:Payment
    },
    {
      path:'/surepay',
      component:SurePay
    }
  ]
})
