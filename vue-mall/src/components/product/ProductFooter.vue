<template>
      <div class="details-footer">
        <div class="foot-shop">
          <img :src="srcurl+merchantPicIndex">
          <div class="text">
            <h3>{{merchantName}}</h3>
            <p>{{merchantMark}}</p>
          </div>
          <!--<div class="panel-count clearfix">
            <div class="sale-c fl">
              <h3>{{productSaleNum}}件</h3>
              <p>销量</p>
            </div>
            <div class="count fr">
              <h3>{{productStockNum}}件</h3>
              <p>商品数量</p>
            </div>
          </div>-->
        </div>
      </div>
</template>

<script>
    export default {
        name: "details-footer",
        props:["merchantName","merchantMark","productSaleNum","productStockNum","merchantPicIndex"],
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
          }
        }
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
</style>
