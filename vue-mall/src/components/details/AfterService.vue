<template>
  <div class="after-service">
    <div class="wrap w10">
      <!--详情头部区-->
      <AfterServiceHeaderView></AfterServiceHeaderView>
      <!--详情标题区-->
      <AfterServiceTitleView></AfterServiceTitleView>
      <!--详情协议区-->
      <AfterServiceProtocolView></AfterServiceProtocolView>
      <!--详情底部区-->
      <AfterServiceBottomView></AfterServiceBottomView>
    </div>
  </div>
</template>

<script>
  import AfterServiceHeaderView from '@/components/product/ProductHeader';
  import AfterServiceTitleView from '@/components/details/DetailsTitle';
  import AfterServiceProtocolView from '@/components/details/AfterServiceProtocol';
  import AfterServiceBottomView from '@/components/product/ProductBottom';
  export default {
    name: "after-service",
    components:{
      AfterServiceHeaderView,
      AfterServiceTitleView,
      AfterServiceProtocolView,
      AfterServiceBottomView
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
  @import '../../assets/css/product/product-b.css';
</style>
