<template>
      <div class="details-footer">
        <div class="foot-shop">
          <img :src="srcurl+productInfo.merchantPicIndex">
          <div class="text">
            <h3>{{productInfo.merchantName}}</h3>
            <p>{{productInfo.merchantMark}}</p>
          </div>
          <!--<div class="panel-count clearfix">
            <div class="sale-c fl">
              <h3>{{productInfo.productSaleNum}}件</h3>
              <p>销量</p>
            </div>
            <div class="count fr">
              <h3>{{productInfo.productStockNum}}件</h3>
              <p>商品数量</p>
            </div>
          </div>-->
        </div>
      </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "details-footer",
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
          }
        },
        computed:{
          ...mapState({
              productInfo:'productInfo',
            }
          ),
        },
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
</style>
