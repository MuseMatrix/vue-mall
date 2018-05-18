<template>
    <div class="product-details">
        <div class="detail-h clearfix">
            <a class="back fl" @click="back"><i class="iconfont icon-fanhui"></i></a>
            <a class="share fr"><i class="iconfont icon-fenxiang"></i></a>
            <div class="cate">
             <!-- <a v-for="(item,index) in menuls"><router-link :to="item.path">{{item.text}}</router-link></a>-->
              <a><router-link :to="{name:'product',query:{id:productId}}">商品</router-link></a>
              <a><router-link to="/details">详情</router-link></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-details",
        props:["productIntroduceList","specificationParamList","afterSaleService"],
        data(){
            return{
              menuls:[
                {text:"商品",path:"/product"},
                {text:"详情",path:"/details"},
              /*  {text:"评价",path:"/assess"},*/
              ],
              productId:""
            }
        },
        methods:{
          back(){
            return this.$router.go(-1);
          },
        },
        mounted(){
          this.productId = localStorage.getItem("productId");
        }
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-h.css';
</style>
