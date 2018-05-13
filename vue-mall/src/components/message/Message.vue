<template>
  <div class="message">
    <div class="wrap w10">
      <!--消息头部区-->
      <MessageHeaderView></MessageHeaderView>
      <!--消息内容区-->
      <MessageImageView></MessageImageView>
    </div>
  </div>
</template>

<script>
  import MessageHeaderView from './MessageHeader.vue';
  import MessageImageView from './MessageContent.vue';
  export default {
    name: "message",
    components:{
      MessageHeaderView,
      MessageImageView,
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/product.css';
</style>
