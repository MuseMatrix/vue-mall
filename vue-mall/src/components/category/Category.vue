<template>
  <div class="category">
    <div class="wrap w10 clearfix">
      <!--分类头部区-->
      <CategoryHeaderView></CategoryHeaderView>
      <!--分类图片说明区-->
      <CategorySideView></CategorySideView>
      <!--分类规格区域-->
      <CategoryContentView></CategoryContentView>
      <!--分类足部区域-->
      <CategoryFootView></CategoryFootView>
    </div>
  </div>
</template>

<script>
  import CategoryHeaderView from './CategoryHeader.vue';
  import CategorySideView from './CategorySide.vue';
  import CategoryContentView from './CategoryContent.vue';
  import CategoryFootView from '@/components/home/HomeBottom';
  export default {
    name: "category",
    components:{
      CategoryHeaderView,
      CategorySideView,
      CategoryContentView,
      CategoryFootView
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/category/category.css';
</style>
