<template>
  <div class="details-title">
      <ul class="d-title">
          <li><router-link to="/details">商品介绍</router-link></li>
          <li><router-link to="/spec">规格参数</router-link></li>
          <li><router-link to="/afterservice">售后服务</router-link></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "details-title"
    }
</script>

<style scoped>
  @import '../../assets/css/details/details-t.css';
</style>
