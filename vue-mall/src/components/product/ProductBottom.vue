<template>
  <div class="detail-footer w10">
    <div class="w10 foot">
      <a class="foot-t">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </a>
      <a class="foot-t">
        <i class="iconfont icon-collection"></i>
        <p><router-link to="/">商城</router-link></p>
      </a>
      <a class="foot-t">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </a>
      <div class="btn">
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "product-bottom"
    }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/product/iconfont.css';
  @import '../../assets/css/product/product-b.css';
</style>
