<template>
  <div class="spec">
    <div class="wrap w10">
      <!--详情头部区-->
      <SpecHeaderView></SpecHeaderView>
      <!--详情标题区-->
      <SpecTitleView></SpecTitleView>
      <!--详情图片区-->
      <SpecTableView></SpecTableView>
      <!--详情底部区-->
      <SpecBottomView></SpecBottomView>
    </div>
  </div>
</template>

<script>
  import SpecHeaderView from '@/components/product/ProductHeader';
  import SpecTitleView from '@/components/details/DetailsTitle';
  import SpecTableView from '@/components/details/SpecTable';
  import SpecBottomView from '@/components/product/ProductBottom';
  export default {
    name: "spec",
    components:{
      SpecHeaderView,
      SpecTitleView,
      SpecTableView,
      SpecBottomView
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
  @import '../../assets/css/product/product-b.css';
</style>
