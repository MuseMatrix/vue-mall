<template>
  <div class="category">
    <div class="wrap w10 clearfix">
      <!--分类头部区-->
      <CategoryHeaderView></CategoryHeaderView>
      <!--分类侧边区-->
      <CategorySideView :topdata="topdata" ></CategorySideView>
      <!--分类内容区域-->
      <!--<CategoryContentView :secondary="secondary"></CategoryContentView>-->
      <!--分类足部区域-->
      <CategoryFootView></CategoryFootView>
    </div>
  </div>
</template>

<script>
  import CategoryHeaderView from './CategoryHeader.vue';
  import CategorySideView from './CategorySide.vue';
  /*import CategoryContentView from './CategoryContent.vue';*/
  import CategoryFootView from '@/components/home/HomeBottom';

  const url = "http://192.168.1.99:8080/malls-provider-http";

  export default {
    name: "category",
    data(){
      return{
        topdata:"",
        secondary:"",
        message:""
      }
    },
    components:{
      CategoryHeaderView,
      CategorySideView,
/*      CategoryContentView,*/
      CategoryFootView
    },
    mounted(){
      this.$axios.post('api/api/malls/product/queryMallsProductCatalog',{"userId":"0","requestId":"0"}).then((res) =>{
        this.topdata = res.data.datalist;
      }).catch((error) =>{
        console.log(res);
      })
    },
  }
</script>

<style scoped>
  @import '../../assets/css/category/category.css';
</style>
