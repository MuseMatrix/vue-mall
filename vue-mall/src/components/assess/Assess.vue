<template>
  <div class="assess pb-5">
    <div class="wrap w10">
      <!--评价头部区-->
      <AssessHeaderView></AssessHeaderView>
      <!--评价内容区-->
      <AssessContentView></AssessContentView>
      <!--详情底部区-->
      <AssessBottomView></AssessBottomView>
    </div>
  </div>
</template>

<script>
  import AssessHeaderView from '@/components/product/ProductHeader';
  import AssessContentView from '@/components/assess/AssessContent';
  import AssessBottomView from '@/components/product/ProductBottom';
  export default {
    name: "assess",
    components:{
      AssessHeaderView,
      AssessContentView,
      AssessBottomView
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/product-f.css';
  @import '../../assets/css/product/product-b.css';
</style>
