<template>
    <div class="product-details">
        <div class="detail-h clearfix">
            <a class="back fl" @click="back"><i class="iconfont icon-fanhui"></i></a>
            <a class="share fr"><i class="iconfont icon-fenxiang"></i></a>
            <div class="cate">
              <a><router-link to="/product">商品</router-link></a>
              <a><router-link to="/details">详情</router-link></a>
              <a><router-link to="/assess">评价</router-link></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-details",
        methods:{
          back(){
            return this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-h.css';
</style>
