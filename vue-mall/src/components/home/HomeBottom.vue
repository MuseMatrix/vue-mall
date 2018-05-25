<template>
  <div id="home-b">
    <div id="footer" class="w10">
        <div class="w10 foot">
            <a>
              <i class="iconfont icon-wodeshangquan"></i>
              <p>商圈</p>
            </a>
            <a>
              <router-link to="/home">
                <i class="iconfont icon-shangcheng"></i>
                <p>商城</p>
              </router-link>
            </a>
            <a>
              <i class="iconfont icon-wode"></i>
              <p>我的</p>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home-b"
    }
</script>
<style scoped>
  @import '../../assets/css/home/bottom.css';
</style>
