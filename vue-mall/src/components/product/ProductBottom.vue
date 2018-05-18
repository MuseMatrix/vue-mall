<template>
  <div class="detail-footer w10">
    <div class="w10 foot">
      <!--<a class="foot-t">
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
      </div>-->
      <button class="btn" @click="showModal">立即购买</button>
    </div>
    <div class="now-buy-model" v-show="isModelVisible">
      <div class="modal-backdrop">
        <div class="modal">
          <div class="product-o">
              <img v-for="(item,index) in bannerPicIndexList" v-if="index == 0" :src="srcurl+item.picIndex" height="110" width="110"/>
            <div class="product-t">
              <span>￥{{productPrice}}</span>
              <p>商品编号:{{productId}}</p>
            </div>
            <i class="iconfont icon-guanbi" @click="closeModal"></i>
          </div>
<!--          <div class="feature">
            <h3>食品口味</h3>
            <ul>
              <li>A款儿童喜爱</li>
              <li>B款甜味算啦</li>
            </ul>
          </div>-->
          <div class="price">
            <span class="txt fl">购买数量</span>
            <div class="tally fr">
              <button class="sub" @click="sub">-</button><input type="text" name="" value="count" v-model="count"><button class="add" @click="add">+</button>
            </div>
          </div>
          <router-link :to="{name:'order',query:{
            counter:count,
            productId:productId,
            merchantId:merchantId,
            }}"><button class="sure">确定</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "product-bottom",
      props:[
          "productName",
          "productMark",
          "productPrice",
          "productId",
          "bannerPicIndexList",
          "merchantId",
        ],
      data(){
          return{
            isModelVisible:false,
            count:0,
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/"
          }
      },
      methods:{
          showModal(){
              this.isModelVisible = true;
          },
          closeModal(){
            this.isModelVisible = false;
          },
          add(){
            this.count++;
          },
          sub(){
            if(this.count <1 ){
              return;
            }
            this.count--;
          }
        }
      }
</script>

<style scoped>
  @import '../../assets/css/product/product-b.css';
  @import '../../assets/css/product/nowbuy.css';
</style>
