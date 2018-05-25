<template>
  <div class="category-list-content-ic pt-5">
    <div class="category-list-header">
      <div class="cate w9-2">
        <a class=""><i class="iconfont icon-liebiao" @click="changelist"></i></a>
        <div class="text-msg">
          <input class="search" type="text" placeholder="请输入店铺或美食" value="" v-model="sermsg" @click="clear" @keyup.enter="entser"  ref="serinput">
        </div>
        <router-link to="/">
          <a class=""><span>取消</span></a>
        </router-link>
      </div>
    </div>
    <!--<div class="w9-m snack-goods clbg" v-show="false">
      <ul class="clearfix">
        <li v-for="(item,index) in productlist">
          <router-link :to="{name:'product',query:{id:item.productId}}">
            <img :src="srcurl+item.productPicIndex" height="108" width="108"/>
          <p>{{item.productName}}</p>
            <p>
              <span style="border:none">￥{{item.productRetailPrice.toFixed(2)}}</span>
              <i v-if="item.isOfficial == 0">官方</i>
              <i v-if="item.isAttribution == 0" style="font-style:normal;border:1px solid red;">自营</i>
            </p>
          </router-link>
        </li>        &lt;!&ndash;<li>
          <img src="../../assets/images/cate-icc.png" height="108" width="109"/>
          <p>维达卫生纸15包4层结构 </p>
          <p>￥30<span>官方</span><span>直营</span></p>
        </li>  &ndash;&gt;
      </ul>
    </div>
    <div class="category-list-content" v-show="false">
      <ul>
        <li v-for="(item,index) in productlist">
          <router-link :to="{name:'product',query:{id:item.productId}}">
          <a>
            <img :src="srcurl+item.productPicIndex" height="108" width="108"/>
            <div class="c-text">
              <h3>{{item.productName}}</h3>
              <p>
                <span>￥{{item.productRetailPrice.toFixed(2)}}</span>
                <i v-if="item.isOfficial == 0">官方</i>
                <i v-if="item.isAttribution == 0">自营</i>
              </p>
            </div>
          </a>
          </router-link>
        </li>
      </ul>
    </div>-->
    <div class="chaff" v-show="show" style="background-color: #fff;">
      <ul>
        <li v-for="(item,index) in productlist">
          <router-link :to="{name:'product',query:{id:item.productId}}">
            <a>
              <img :src="srcurl+item.productPicIndex" height="75" width="100"/>
              <div class="c-text">
                <h3>{{item.productName}}</h3>
                <p style="padding: .1rem;"></p>
                <p>
                  <span style="font-size: 16px;color:red;vertical-align: middle">￥{{item.productRetailPrice}}</span>
                  <i v-if="item.isOfficial == 0">官方</i>
                  <i v-if="item.isAttribution == 0" style="font-style: normal;color: red;border: 1px solid red;border-radius: 5px;vertical-align: middle">自营</i>
                </p>
              </div>
            </a>
          </router-link>
        </li>
 <!--       <li>
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
        </li>-->
      </ul>
    </div>
    <div class="chaff change" v-show="!show">
      <ul>
        <li v-for="(item,index) in productlist">
          <router-link :to="{name:'product',query:{id:item.productId}}">
          <a>
            <img :src="srcurl+item.productPicIndex" height="145" width="184"/>
            <div class="c-text">
              <h3>{{item.productName}}</h3>
              <p></p>
              <p>
                <span style="font-size: 16px;color:red;vertical-align: middle">￥{{item.productRetailPrice}}</span>
                <i v-if="item.isOfficial == 0">官方</i>
                <i v-if="item.isAttribution == 0" style="font-style: normal;color: red;border: 1px solid red;border-radius: 5px;vertical-align: middle">自营</i>
              </p>
            </div>
          </a>
          </router-link>
        </li><!--        <li>
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
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import Qs from 'qs';
  import VueScroller from 'vue-scroller';
  import { mapState } from 'vuex';
    const heads = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    export default {
        name: "category-list-content-ic",
        props:['name'],
        data(){
          return{
            show:false,
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
            resurl:"api/api/malls/product/queryMallsProductList",
            sermsg:"",
            parms:{
              userId:"0",
              requestId:"0",
              merchantId:"0",
              catalogId : "",
              pageable :false,
              pagesize:"99999",
              destpage:"1",
              keyWords:""
            }
          }
        },
        methods:{
            clear:function(){
              this.$refs.serinput.placeholder = "";
            },
            entser:function(){
              this.parms.keyWords =  this.$refs.serinput.value;
              this.$store.dispatch("findProductList",{resurl:this.resurl,parms:Qs.stringify(this.parms),heads:heads});
            },
            changelist:function(){
                this.show = !this.show;
            },
/*            infinite(done) {
              if(this.noData) {
                setTimeout(()=>{
                  this.$refs.myscroller.finishInfinite(2);
                })
                return;
              }
              let self = this,
                  start = this.moveList.length;

              setTimeout(() => {
                for(let i = start + 1; i < start + 10; i++) {
                  self.moveList.push(i)
                }
                if(start > 10) {
                  self.noData = "没有更多数据"
                }
                self.$refs.myscroller.resize();
                done()
              }, 1500)
            },
            refresh() {
              console.log('refresh')
            }*/
        },
        mounted(){
          console.log("进来了"+this.$route.query.id);
          console.log("进来了"+this.$route.query.name);
            this.parms.catalogId = this.$route.query.id;
            this.parms.keyWords = this.$route.query.name;
            this.$store.dispatch("findProductList",{resurl:this.resurl,parms:Qs.stringify(this.parms),heads:heads});
        },
        computed:{
        ...mapState({
            productlist:'productlist',
          }
        ),
      },
    }
</script>

<style scoped>
  @import '../../assets/css/home/content.css';
  @import '../../assets/css/category/category-icc.css';
  @import '../../assets/css/category/category-lh.css';
</style>
