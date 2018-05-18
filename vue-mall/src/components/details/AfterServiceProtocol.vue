<template>
  <div class="after-service-protocol">
    <div class="service-protocol w9-2">
      <p>尊敬的用户：</p>
      <p>{{afterSaleService}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "after-service-protocol",
      data(){
        return{
          afterSaleService:""
        }
      },
      mounted(){
        console.log("啦啦啦啦啦啦"+localStorage.getItem("afterSaleService"));
        this.afterSaleService = localStorage.getItem("afterSaleService");

      }
    }
</script>

<style scoped>
  @import '../../assets/css/details/afterservice.css';
</style>
