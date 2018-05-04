<template>
  <div class="home">
    <div class="m_layout">
      <!-- 头部区 -->
      <HomeHeaderView></HomeHeaderView>
      <!-- 轮播图-->
      <HomeBannerView></HomeBannerView>
      <!--商品区-->
      <HomeMainView></HomeMainView>
    </div>
  </div>
</template>
<script>
  import HomeHeaderView from './HomeHeader.vue';
  import HomeBannerView from './HomeBanner.vue';
  import HomeMainView from './HomeMain.vue';
  export default{
    name:"home",
    components:{
      HomeHeaderView,
      HomeBannerView,
      HomeMainView
    },
  }
</script>
<style>
  @import '../assets/css/index.css';
</style>
