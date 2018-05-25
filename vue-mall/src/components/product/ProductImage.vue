<template>
    <div class="details-image">
      <div class="detail-img w10">
    \    <div class="banner">
          <div class="swiper-container" id="swiper-one">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in productInfo.bannerPicIndexList">
                <a>
                  <img :src="srcurl+item.picIndex" width="355" height="133">
                </a>
              </div>
            </div>
            <div class="swiper-pagination page"></div>
          </div>
        </div>
  <!--      <ul v-for="(item,index) in bannerPicIndexList">
          <li> <img :src="srcurl+item.picIndex" width="355" height="133"></li>
        </ul>-->
      </div>

      <div class="detail-d">
        <p>{{productInfo.productName}}</p>
        <p>{{productInfo.productMark}}</p>
        <p>￥<span class="price" >{{productInfo.productPrice}}</span>
          <span class="act" v-if="productInfo.productFreight == 0">免运费</span>
          <span class="act" v-else>运费:{{productInfo.productFreight}}</span></p>
        <p><span class="favo">优惠</span><!--<span class="cash">返现</span><span class="prent">20%</span>-->{{productInfo.preferentialInfo}}</p>
      </div>
    </div>
</template>

<script>
  import Swiper from '../../../plugin-js/swiper-4.2.2.min.js';
  import { mapState } from 'vuex';
    export default {
        name: "details-image",
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/"
          }
        },
        mounted(){
          var mySwiper = new Swiper ('#swiper-one', {
            pagination : '.swiper-pagination',
            paginationClickable: true,
            longSwipesRatio: 0.3,
            touchRatio:1,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
          })
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
  @import "../../assets/css/product/product-img.css";
</style>
