<template>
    <div class="category-list-header">
        <div class="cate w9-2">
          <a class=""><i class="iconfont icon-liebiao"></i></a>
          <div class="text-msg">
            <input class="search" type="text" placeholder="" value="请输入店铺或美食" @click="clear">
          </div>
          <router-link to="/">
            <a class=""><span>取消</span></a>
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category-list-header",
        methods:{
          clear(){
            return this.message = "";
          },
        }
    }
</script>

<style scoped>
  @import '../../assets/css/category/category-lh.css';
</style>
