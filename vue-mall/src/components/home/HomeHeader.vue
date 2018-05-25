<template>
  <div id="home-h">
      <div class="head-top">
        <a class="category fl" href="">
          <router-link to="/">分类</router-link>
        </a>
        <router-link to="/surepay">
          <a class="msg fr" href="">
            <i class="iconfont icon-xiaoxi"></i>
          </a>
        </router-link>
        <div class="input">
          <a class="search" href="">请输入商品名称</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-h"
    }
</script>

<style scoped>
  @import '../../assets/css/home/header.css';
</style>
