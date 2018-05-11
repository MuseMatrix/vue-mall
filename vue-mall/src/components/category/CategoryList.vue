<template>
  <div class="categorylist">
    <div class="wrap w10 clearfix">
      <!--分类列表头部区-->
      <CategoryListHeaderView></CategoryListHeaderView>
      <!--分类列表说明区-->
      <CategoryListView></CategoryListView>
    </div>
  </div>
</template>

<script>
  import CategoryListHeaderView from './CategoryListHeader.vue';
  import CategoryListView from './CategoryListContentIc.vue';
  export default {
    name: "categorylist",
    components:{
      CategoryListHeaderView,
      CategoryListView,
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
