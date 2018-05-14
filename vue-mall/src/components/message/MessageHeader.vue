<template>
  <div class="message-header">
    <header>
      <div class="head w9-2">
        <a class="bill-back fl" @click="back">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a class="msg">消息</a>
        <a class="fr">客服</a>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: "message-header",
        methods:{
          back(){
            return this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  @import '../../assets/css/message/message-h.css';
</style>
