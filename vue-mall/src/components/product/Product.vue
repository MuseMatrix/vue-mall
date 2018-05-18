<template>
    <div class="product">
        <div class="wrap w10">
            <!--商品头部区-->
            <ProductHeaderView
                :productIntroduceList = "productIntroduceList"
                :specificationParamList = "specificationParamList"
                :afterSaleService = "afterSaleService"
            ></ProductHeaderView>
            <!--商品图片区-->
            <ProductImageView
                :bannerPicIndexList="bannerPicIndexList"
                :productName="productName"
                :productMark="productMark"
                :productPrice="productPrice"
                :productFreight="productFreight"
                :preferentialInfo="preferentialInfo"
            ></ProductImageView>
            <!--商品规格评论区域-->
            <!--<ProductSpecView></ProductSpecView>-->
            <!--商品商户区域-->
            <ProductFooterView
                :merchantName = "merchantName"
                :merchantMark = "merchantMark"
                :merchantPicIndex = "merchantPicIndex"
                :productSaleNum ="productSaleNum"
                :productStockNum = "productStockNum"
            ></ProductFooterView>
            <!--详情足部区域-->
            <ProductBottomView
              :productName="productName"
              :productMark="productMark"
              :productPrice="productPrice"
              :productId = "parms.productId"
              :productFreight = "productFreight"
              :bannerPicIndexList = "bannerPicIndexList"
              :merchantName = "merchantName"
              :merchantId = "merchantId"
              :merchantPicIndex = "merchantPicIndex"
            ></ProductBottomView>

        </div>
    </div>
</template>

<script>
    import Qs from 'qs';
    import { mapState } from 'vuex';
    import ProductHeaderView from './ProductHeader.vue';
    import ProductImageView from './ProductImage.vue';
/*    import ProductSpecView from './ProductSpec.vue';*/
    import ProductFooterView from './ProductFooter.vue';
    import ProductBottomView from './ProductBottom.vue';

    const url = "http://192.168.1.188:8080/malls-provider-http";
    const heads = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    export default {
        name: "product",
        data(){
          return{
            userId:"0",
            requestId:"0",
            resurl:"api/api/malls/product/queryMallsProductDetail",
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
            afterSaleService:"",
            parms:{
              userId:"0",
              requestId:"0",
              productId:"",
            }
          }
        },
        components:{
            ProductHeaderView,
            ProductImageView,
/*            ProductSpecView,*/
            ProductFooterView,
            ProductBottomView
        },
        computed:{
          ...mapState({
              productInfo:'productInfo',
          }
          ),
        },
        mounted(){

          this.parms.productId = this.$route.query.id;

            this.$store.dispatch("findProductInfo",{resurl:this.resurl,parms:Qs.stringify(this.parms),heads:heads});

          /*   this.bannerPicIndexList = this.$store.state.productInfo.bannerPicIndexList;
             console.log(this.$store.state.productInfo.bannerPicIndexList);
           this.picIndex = this.$store.state.productInfo.picIndex;
           this.productName = this.$store.state.productInfo.productName;
           this.productMark = this.$store.state.productInfo.productMark;
           this.productPrice = this.$store.state.productInfo.productPrice;
           this.productFreight = this.$store.state.productInfo.productFreight;
           this.preferentialInfo = this.$store.state.productInfo.preferentialInfo;
           this.merchantId = this.$store.state.productInfo.merchantId;
           this.merchantName = rthis.$store.state.productInfo.merchantName;
           this.merchantMark = this.$store.state.productInfo.merchantMark;
           this.merchantPicIndex = this.$store.state.productInfo.merchantPicIndex;
           this.productSaleNum = this.$store.state.productInfo.productSaleNum;
           this.productStockNum = this.$store.state.productInfo.productStockNum;
           this.productIntroduceList = this.$store.state.productInfo.productIntroduceList;
           this.specificationParamList = this.$store.state.productInfo.specificationParamList;
           this.afterSaleService = this.$store.state.productInfo.afterSaleService;*/

        /*  this.$axios.post(this.resurl,Qs.stringify(this.parms),heads).then((res) =>{
             console.log(res);
             this.bannerPicIndexList = res.data.bannerPicIndexList;
             this.picIndex = res.data.picIndex;
             this.productName = res.data.productName;
             this.productMark = res.data.productMark;
             this.productPrice = res.data.productPrice;
             this.productFreight = res.data.productFreight;
             this.preferentialInfo = res.data.preferentialInfo;
             this.merchantId = res.data.merchantId;
             this.merchantName = res.data.merchantName;
             this.merchantMark = res.data.merchantMark;
             this.merchantPicIndex = res.data.merchantPicIndex;
             this.productSaleNum = res.data.productSaleNum;
             this.productStockNum = res.data.productStockNum;
             this.productIntroduceList = res.data.productIntroduceList;
             this.specificationParamList = res.data.specificationParamList;
             this.afterSaleService = res.data.afterSaleService;

             localStorage.setItem("productId",this.$route.query.id)
             localStorage.setItem("productIntroduceList", JSON.stringify(res.data.productIntroduceList));
             localStorage.setItem("bannerPicIndexList", JSON.stringify(res.data.bannerPicIndexList));
             localStorage.setItem("specificationParamList", JSON.stringify(res.data.specificationParamList));
             localStorage.setItem("afterSaleService", res.data.afterSaleService);
          }).catch((error) =>{
            console.log(res);
          })*/
          console.log(this.productInfo)
        },
    }
</script>

<style scoped>
  @import '../../assets/css/product/product.css';
</style>
