<template>
  <div class="home pb-5">
    <div class="wrap w10">
      <!-- 头部区 -->
      <HomeHeaderView></HomeHeaderView>
      <!-- 轮播图 -->
      <HomeBannerView></HomeBannerView>
      <!-- 内容区 -->
      <HomeMainView></HomeMainView>
      <!-- 底部区域 -->
      <HomeBottomView></HomeBottomView>
    </div>
  </div>
</template>
<script>
  import HomeHeaderView from './HomeHeader.vue';
  import HomeBannerView from './HomeBanner.vue';
  import HomeMainView from './HomeMain.vue';
  import HomeBottomView from './HomeBottom.vue';
  export default{
    name:"home",
    components:{
      HomeHeaderView,
      HomeBannerView,
      HomeMainView,
      HomeBottomView
    },
  }
</script>
<style scoped>
</style>
