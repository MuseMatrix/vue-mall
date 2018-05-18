<template>
    <div class="details-image">
      <div class="detail-img w10">
    \    <div class="banner">
          <div class="swiper-container" id="swiper-one">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href=""  v-for="(item,index) in bannerPicIndexList">
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
        <p>{{productName}}</p>
        <p>{{productMark}}</p>
        <p>￥<span class="price">{{productPrice}}</span><span class="act" v-if="productFreight == 0">免运费</span></p>
        <p><span class="favo">优惠</span><!--<span class="cash">返现</span><span class="prent">20%</span>-->{{preferentialInfo}}</p>
      </div>
    </div>
</template>

<script>
  import Swiper from '../../../plugin-js/swiper-4.2.2.min.js'
    export default {
        name: "details-image",
        props:["bannerPicIndexList","productName","productMark","productPrice","productFreight","preferentialInfo"],
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/"
          }
        },
        mounted(){
          var mySwiper = new Swiper ('#swiper-one', {
            autoplay: false,
          })
        }
    }
</script>

<style scoped>
  @import "../../assets/css/product/product-img.css";
</style>
