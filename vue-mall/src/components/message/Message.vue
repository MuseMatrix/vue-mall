<template>
  <div class="message">
    <div class="wrap w10">
      <!--消息头部区-->
      <MessageHeaderView></MessageHeaderView>
      <!--消息内容区-->
      <MessageImageView :datalist="datalist"></MessageImageView>
    </div>
  </div>
</template>

<script>
  import Qs from 'qs';
  import MessageHeaderView from './MessageHeader.vue';
  import MessageImageView from './MessageContent.vue';

  const heads = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  export default {
    name: "message",
    data(){
      return{
        respmsgurl:"api/api/malls/logistics/queryMallsLogisticsMsgList",
        parms:{
          userId:"",
          requestId:new Date().getTime(),
          pageable:true,
          pagesize:false,
          destpage:1,
        },
        datalist:""
      }
    },
    components:{
      MessageHeaderView,
      MessageImageView,
    },
    mounted(){
      this.$axios.post(this.respmsgurl,Qs.stringify(this.parms),heads).then((res) =>{
          console.log(res);
          this.datalist = res.data.datalist;
      }).catch((error)=>{
          console.log(error);
      })
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/product.css';
</style>
