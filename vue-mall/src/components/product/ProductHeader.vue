<template>
    <div class="product-details">
        <div class="detail-h clearfix">
            <a class="back fl" @click="back"><i class="iconfont icon-fanhui"></i></a>
            <a class="share fr"><i class="iconfont icon-fenxiang"></i></a>
            <div class="cate">
             <!-- <a v-for="(item,index) in menuls"><router-link :to="item.path">{{item.text}}</router-link></a>-->
              <a><router-link :to="{name:'product',query:{id:productInfo.productId}}">商品</router-link></a>
              <a><router-link to="/details">详情</router-link></a>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "product-details",
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
      computed:{
        ...mapState({
            productInfo:'productInfo',
          }
        ),
      },
    }
</script>

<style scoped>
  @import '../../assets/css/product/product-h.css';
</style>
