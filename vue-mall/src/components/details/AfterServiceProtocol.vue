<template>
  <div class="after-service-protocol">
    <div class="service-protocol w9-2">
      <p>尊敬的用户：</p>
      <p>{{productInfo.afterSaleService}}</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "after-service-protocol",
      data(){
        return{
          afterSaleService:""
        }
      },
      computed:{
        ...mapState({
            productInfo:'productInfo',
          }
        ),
      },
    }
</script>

<style scoped>
  @import '../../assets/css/details/afterservice.css';
</style>
