import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
  /*初始化存放数据*/
  state:{
      productInfo:{
        bannerPicIndexList:"",
        picIndex:"",
        productId:"",
        productName:"",
        productMark:"",
        productPrice:"",
        productFreight:"",
        preferentialInfo:"",
        merchantId:"",
        merchantName:"",
        merchantMark:"",
        merchantPicIndex:"",
        productSaleNum:"",
        productStockNum:"",
        productIntroduceList:"",
        specificationParamList:"",
        afterSaleService:""
      },
      productlist:""
  },
  /*获取数据*/
  getters:{
    productInfo: state => state.productInfo,
    productlist: state => state.state
  },
  /*同步进行方法，通知state修改*/
  mutations:{
    findProductInfo:(state, productInfo) => {
      state.productInfo = productInfo.productInfo;
    },
    findProductList:(state,productlist) => {
      state.productlist = productlist.productlist;
    }
  },
 /* action异步请求*/
  actions:{
   findProductInfo:({commit}, productInfo) => {
      commit('findProductInfo', {
        productInfo: productInfo,
      })
    },
    findProductList:({commit},productlist) =>{
      commit('findProductList', {
        productlist: productlist,
      })
    },
    /*查询商品详情*/
    findProductInfo:(context,resData) => {
        axios.post(resData.resurl,resData.parms,resData.heads).then((res) =>{
        console.log("【商品详情respon.02se】："+JSON.stringify(res));

        context.state.productInfo.bannerPicIndexList = res.data.bannerPicIndexList;
        context.state.productInfo.picIndex = res.data.picIndex;
        context.state.productInfo.productId = res.data.productId;
        context.state.productInfo.productName = res.data.productName;
        context.state.productInfo.productMark = res.data.productMark;
        context.state.productInfo.productPrice = res.data.productPrice;
        context.state.productInfo.productFreight = res.data.productFreight;
        context.state.productInfo.preferentialInfo = res.data.preferentialInfo;
        context.state.productInfo.merchantId = res.data.merchantId;
        context.state.productInfo.merchantName = res.data.merchantName;
        context.state.productInfo.merchantMark = res.data.merchantMark;
        context.state.productInfo.merchantPicIndex = res.data.merchantPicIndex;
        context.state.productInfo.productSaleNum = res.data.productSaleNum;
        context.state.productInfo.productStockNum = res.data.productStockNum;
        context.state.productInfo.productIntroduceList = res.data.productIntroduceList;
        context.state.productInfo.specificationParamList = res.data.specificationParamList;
        context.state.productInfo.afterSaleService = res.data.afterSaleService;

      }).catch((error) =>{
        console.log(error);
      })
    },
    /*查询商品列表*/
    findProductList:(context,resData) =>{
        axios.post(resData.resurl,resData.parms,resData.heads).then((res) =>{
        console.log("【商品列表response】："+JSON.stringify(res));

        context.state.productlist = res.data.datalist;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
})
