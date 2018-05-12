<template>
  <div class="detail-footer w10">
    <div class="w10 foot">
      <a class="foot-t">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </a>
      <a class="foot-t">
        <i class="iconfont icon-collection"></i>
        <p><router-link to="/">商城</router-link></p>
      </a>
      <a class="foot-t">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </a>
      <div class="btn">
        <router-link to="/bill"><button>加入购物车</button></router-link>
        <router-link to="/order"><button @click="showModal">立即购买</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
/*  import Modal from './NowBuyModel.vue';*/
    export default {
        name: "product-bottom",
      /*  components:{
          Modal
        },*/
      data(){
          return{
            isModelVisible:false
          }
      },
      methods:{
          showModal:function(){
              this.isModelVisible = true;
          }
      }
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-b.css';
</style>
