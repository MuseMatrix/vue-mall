<template>
  <div class="search">
    <div class="wrap w10">
      <!--详情头部区-->
      <SearchHeaderView></SearchHeaderView>
      <!--详情图片说明区-->
      <SearchContentView></SearchContentView>

    </div>
  </div>
</template>

<script>
  import SearchHeaderView from './SearchHeader.vue';
  import SearchContentView from './SearchContent.vue';
  export default {
    name: "search",
    components:{
      SearchHeaderView,
      SearchContentView,
    }
  }
</script>

<style scoped>
</style>
