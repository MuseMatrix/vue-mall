import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state:{
      //初始化存放数据
      strict: true,
      productInfo:{
        bannerPicIndexList:"",
        picIndex:"",
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
      }
  },

  getters:{
    productInfo: state => state.productInfo,
  },
  /*同步进行方法，通知state修改*/
  mutations:{
    findProductInfo(state, productInfo) {
      state.productInfo = productInfo.productInfo;
    },
  },
 /* action异步请求*/
  actions:{
    findProductInfo({commit}, productInfo) {
      commit('findProductInfo', {
        productInfo: productInfo,
      })
    },
    findProductInfo(context,resData){
        console.log("进来了");
        console.log(resData);
        axios.post(resData.resurl,resData.parms,resData.heads).then((res) =>{
        console.log(res);
        context.state.productInfo.bannerPicIndexList = res.data.bannerPicIndexList;
        context.state.productInfo.picIndex = res.data.picIndex;
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
        console.log(res);
      })
    }
  }
})
