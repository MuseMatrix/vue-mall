<template>
  <div class="details-d">
    <div class="wrap w10">
      <!--详情头部区-->
      <DetailsHeaderView></DetailsHeaderView>
      <!--详情底部区-->
      <DetailsBottomView></DetailsBottomView>
    </div>
  </div>
</template>

<script>
  import DetailsHeaderView from '@/components/product/ProductHeader';
  import DetailsBottomView from '@/components/product/ProductBottom';
  export default {
    name: "details-d",
    components:{
      DetailsHeaderView,
      DetailsBottomView
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/product/iconfont.css';
  @import '../../assets/css/product/product-f.css';
  @import '../../assets/css/product/product-b.css';
</style>
