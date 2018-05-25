<template>
  <div class="categorylist">
    <div class="wrap w10 clearfix">
      <!--分类列表头部区-->
<!--      <CategoryListHeaderView></CategoryListHeaderView>-->
      <!--分类列表说明区-->
      <CategoryListView :name="name"></CategoryListView>
    </div>
  </div>
</template>

<script>
/*  import CategoryListHeaderView from './CategoryListHeader.vue';*/
  import CategoryListView from './CategoryListContentIc.vue';

  const url = "http://192.168.1.188:8080/malls-provider-http";
  export default {
    name: "categorylist",
    data(){
      return{
        name:""
      }
    },
    components:{
/*      CategoryListHeaderView,*/
      CategoryListView,
    },
    mounted(){
      this.name = this.$route.query.name;
    }
  }
</script>

<style scoped>
</style>
