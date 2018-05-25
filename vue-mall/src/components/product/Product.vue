<template>
    <div class="product">
        <div class="wrap w10">
            <!--商品头部区-->
            <ProductHeaderView></ProductHeaderView>
            <!--商品图片区-->
            <ProductImageView></ProductImageView>
            <!--商品规格评论区域-->
            <!--<ProductSpecView></ProductSpecView>-->
            <!--商品商户区域-->
            <ProductFooterView></ProductFooterView>
            <!--详情足部区域-->
            <ProductBottomView></ProductBottomView>

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
    };
    export default {
        name: "product",
        data(){
          return{
            resurl:"api/api/malls/product/queryMallsProductDetail",
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
        },
    }
</script>

<style scoped>
  @import '../../assets/css/product/product.css';
</style>
