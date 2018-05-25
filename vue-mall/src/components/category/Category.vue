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
  import Qs from 'qs';
  import CategoryHeaderView from './CategoryHeader.vue';
  import CategorySideView from './CategorySide.vue';
  /*import CategoryContentView from './CategoryContent.vue';*/
  import CategoryFootView from '@/components/home/HomeBottom';

  export default {
    name: "category",
    data(){
      return{
        topdata:"",
        url:"/api/api/malls/product/queryMallsProductCatalog",
        parms:{
          "userId":"0",
          "requestId":"0"
        }
      }
    },
    components:{
      CategoryHeaderView,
      CategorySideView,
/*    CategoryContentView,*/
      CategoryFootView
    },
    mounted(){
      this.$axios.post(this.url,Qs.stringify(this.parms),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((res) =>{
        console.log("【商品分类请求response】："+JSON.stringify(res));
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
