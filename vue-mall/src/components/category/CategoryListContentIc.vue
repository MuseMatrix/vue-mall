<template>
  <div class="category-list-content-ic pt-5">
    <div class="w9-m snack-goods clbg" v-show="false">
      <ul class="clearfix">
        <li>
          <img src="../../assets/images/cate-icc.png" height="108" width="109"/>
          <p>维达卫生纸15包4层结构 </p>
          <p>￥30<span>官方</span><span>直营</span></p>
        </li>
      </ul>
    </div>
    <div class="category-list-content" v-show="true">
      <ul>
        <li v-for="(item,index) in productlist">
          <router-link :to="{name:'product',query:{id:item.productId}}">
          <a>
            <img :src="srcurl+item.productPicIndex" height="108" width="108"/>
            <div class="c-text">
              <h3>{{item.productName}}</h3>
              <p>
                <span>￥{{item.productRetailPrice}}</span>
                <i v-if="item.isOfficial == 0">官方</i>
                <i v-if="item.isAttribution == 0">自营</i>
              </p>
            </div>
          </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="chaff" v-show="false">
      <ul>
        <li>
          <router-link to="/details">
            <a>
              <img src="../../assets/images/chaff.png" height="75" width="100"/>
              <div class="c-text">
                <h3>潮汕渔港火锅<i>惠</i><i>积 {{ $route.params.id }}</i></h3>
                <p>新鲜大海鱼火锅来自海洋生态</p>
                <p class="amt">
                  <span>返余额</span><i>14%</i>
                  <span>返现</span><i>25%</i>
                </p>
              </div>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="chaff change" v-show="false">
      <ul>
        <li>
          <a>
            <img src="../../assets/images/chaff-i.png" height="145" width="184"/>
            <div class="c-text">
              <h3>火锅家<i>惠</i><i>积</i></h3>
              <p>石锅拌饭辣白菜辛拉面</p>
              <p class="amt">
                <span>返余额</span><i>14%</i>
                <span>返现</span><i>25%</i>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Qs from 'qs'
    export default {
        name: "category-list-content-ic",
        data(){
          return{
            show:false,
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
            resurl:"api/api/malls/product/queryMallsProductList",
            productlist:"",
            parms:{
              userId:"0",
              requestId:"0",
              merchantId:"0",
              catalogId : "",
              pageable :true,
              pagesize:"999999",
              destpage:"1"
            }
          }
        },
        mounted(){
          console.log("进来了"+this.$route.query.id);
            this.parms.catalogId = this.$route.query.id;
            this.$axios.post(this.resurl,Qs.stringify(this.parms),{
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then((res) =>{
              console.log(res);
              this.productlist = res.data.datalist;
            }).catch((error) =>{
              console.log(res);
            })
        }
    }
</script>

<style scoped>
  @import '../../assets/css/home/content.css';
  @import '../../assets/css/category/category-icc.css';
</style>
