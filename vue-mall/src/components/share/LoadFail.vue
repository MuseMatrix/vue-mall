<template>
  <div class="load-fail">
    <div class="head">
      <a class="category fl">
        <i class="iconfont icon-fanhui"></i>
      </a>
      <a class="msg">加载失败</a>
    </div>
    <div class="fail-t">
        <img>
        <p>网络走丢了，请检查您的网络</p>
        <button>刷新</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "load-fail"
    }
</script>

<style scoped>
  @import '../../assets/css/share/loadfail.css';
</style>
