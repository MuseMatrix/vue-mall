<template>
  <div class="category-header clearfix">
    <div class="cate w10">
      <div class="text-msg fl">
        <router-link to="/search">
          <input class="search" type="text" placeholder="" value="请输入店铺或美食">
        </router-link>
      </div>
      <a class="fr">
        <router-link to="/message">
          <i class="iconfont icon-xiaoxi"></i>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "category-header"
    }
</script>

<style scoped>
  @import '../../assets/css/category/category-h.css';
</style>
