<template>
  <div class="details-d">
    <div class="wrap w10">
      <!--详情头部区-->
      <DetailsHeaderView></DetailsHeaderView>
      <!--详情标题区-->
      <DetailsTitleView></DetailsTitleView>
      <!--详情图片区-->
      <DetailsImageView></DetailsImageView>
      <!--详情底部区-->
      <DetailsBottomView></DetailsBottomView>
    </div>
  </div>
</template>

<script>
  import DetailsHeaderView from '@/components/product/ProductHeader';
  import DetailsTitleView from '@/components/details/DetailsTitle';
  import DetailsImageView from '@/components/details/DetailsImage';
  import DetailsBottomView from '@/components/product/ProductBottom';
  export default {
    name: "details-d",
    components:{
      DetailsHeaderView,
      DetailsTitleView,
      DetailsImageView,
      DetailsBottomView
    },
  }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
  @import '../../assets/css/product/product-b.css';
</style>
