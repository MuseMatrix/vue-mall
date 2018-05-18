<template>
  <div class="order">
      <div class="head w10">
        <a class="category fl" @click="back">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a class="msg">填写订单</a>
      </div>
      <div class="content">
        <div class="address">
          <p class="concat">
            <span>{{username}}</span>
            <span>{{mobilePhone}}</span>
          </p>
          <i class="iconfont icon-jiantouyou fr"></i>
          <p class="text" v-if="address != ''">
            北京市海淀区上地大厦{{address}}
          </p>
          <p class="text" v-else>
            请添加地址信息
          </p>
        </div>
        <div><img class="botcss" src="../../assets/images/bottom.png" height="1" width="400"/></div>
        <div class="shop">
          <h3 class="shop-t">商户店铺名称{{merchantName}}<i class="iconfont icon-jiantouyou"></i></h3>
          <div class="panel-img">
            <img :src="srcurl+productPicIndex" height="80" width="80"/>
            <div class="explain">
              <p>{{productName}}
              </p>
              <!--<span>规格:&nbsp;500g</span>-->
              <p class="price">￥<span class="price" ref="price">{{productPrice}}</span></p>
            </div>
          </div>
          <div class="panel-count">
            <div class="p-t clearfix">
              <span class="txt fl">数量</span>
              <div class="tally fr">
                <button class="sub" @click="sub">-</button><input type="text" name="" value="0" v-model="count" ref="cot"><button class="add" @click="add">+</button>
              </div>
            </div>
            <div class="fare clearfix">
              <span class="txt fl">运费</span>
              <span class="txt fr" v-if="productFreightAmount != 0">￥{{productFreightAmount}}</span>
              <span class="txt fr" v-if="productFreightAmount == 0">免运费</span>
            </div>
          </div>
        </div>
        <div class="act">
          <div class="act-j clearfix">
            <span class="fl">优惠卷</span>
            <span class="fr">暂无可用</span>
          </div>
          <div class="act-f clearfix">
            <span class="fl">使用积分<i>可用积分{{availableIntegral}}</i></span>
            <span class="fr" :class="{'cked':isA,'uck':!isA}" @click="toggle"></span>
          </div>
        </div>
        <router-link :to="{name:'bill',query:{phone:mobilePhone}}">
          <div class="issue clearfix">
            <span class="fl">发票</span>
            <i class="iconfont icon-jiantouyou fr"></i>
          </div>
        </router-link>
        <div class="settle">
            <p class="clearfix">
              <span class="fl">商品金额</span>
              <i class="fr">{{productPrice}}</i>
            </p>
       <!--     <p class="clearfix">
              <span class="fl">邮费</span>
              <i class="fr">￥145.00</i>
            </p>-->
            <p class="clearfix">
              <span class="fl">发票运费</span>
              <i class="fr">{{invoiceFreightAmount}}</i>
            </p>
<!--            <p class="clearfix">
              <span class="fl">优惠券抵扣</span>
              <i class="fr">￥145.00</i>
            </p>
            <p class="clearfix">
              <span class="fl">积分抵扣</span>
              <i class="fr">￥145.00</i>
            </p>-->
        </div>
      </div>
      <div class="foot w10 clearfix">
        <p class="category fl">
            <span>实付金额:</span>
            <i ref="totalamount">￥0.00</i>
        </p>
        <button class="fr" type="button" @click="showModal();byValue();">立即购买</button>
      </div>
      <div class="payment" v-show="isModelVisible">
        <div class="modal-backdrop">
          <div class="modal">
            <div class="pay-t">
              <i class="iconfont icon-guanbi" @click="openModal"></i>
              <h4>选择支付方式</h4>
            </div>
            <ul>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>汇通卡支付</span>
                </p>
                <span class="cked fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>会员卡支付</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>余额支付</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>微信</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>支付宝</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>招商银行</span>
                </p>
                <span class="uck fr"></span>
              </li>
            </ul>
              <div class="now-d">
                <router-link to="/paysuccess">
                  <button class="now-p" @click="payment">立即支付(<span ref="nowTotal"></span>)</button>
                </router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="sure-pay" v-show="isModelOpen">
        <div class="modal-backdrop">
          <div class="modal model-center">
            <div class="sure-p">
              <h3>确定放弃支付</h3>
              <p>您的订单将留存在待支付中48小时请尽快完成支付</p>
            </div>
            <div class="btn">
              <button @click="reModal();closeModal();">离开</button><router-link to="/paysuccess"><button class="con">继续支付</button></router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import Qs from 'qs';
  const heads = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  export default {
    name: "order",
    data(){
      return{
        srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
        respayurl:"api/api/malls/pay/queryMallsProductPayInfo",
        resorderurl:"api/api/malls/order/getOrdersOrderNo",
        restopay:"api/api/malls/pay/makeMallsOrder",
        isModelVisible:false,
        isModelOpen:false,
        isA:false,
        ordersOrderNoList:"",
        count:0,
        parms:{
          userId:"3",
          requestId:new Date().getTime(),
          merchantId:"",
          productId:"",
        },
        addressId:"",
        username:"",
        mobilePhone:"",
        address:"",
        merchantName:"",
        productName:"",
        productPicIndex:"",
        productPrice:"",
        specificationParamList:"",
        specificationKey:"",
        specificationKeyName:"",
        specificationValue:"",
        couponList:"",
        productFreightAmount:"",
        availableIntegral:"",
        invoiceFreightAmount:""
      }
    },
    methods:{
      showModal(){
        this.isModelVisible = true;
        let mmpiList = [
          {
            merchantId: 0,
            orgId: 0,
            invoiceAmount: 1,
            couponAmount: 1,
            mpilist: [
              {
              productId:this.parms.productId,
              productAmount:this.productPrice,
              productNum:this.$refs.cot.value,
              productFreightAmount:1
              }
            ]
          }
        ],
        /*组装数据*/
        paydata={
          userId: 3
          ,
          requestId: 0,
          addressId:this.addressId,
          mmpiList: JSON.stringify(mmpiList),
          integralAmount:1,
          realPayAmount: parseFloat(this.$refs.totalamount.innerText),
          invoiceHead:localStorage.getItem("rise"),
          invoiceType:localStorage.getItem("invoiceType"),
          invoiceDutyNumber:localStorage.getItem("duty")
        }
          console.log(localStorage);
          console.log(paydata);
        this.$axios.post(this.resorderurl,Qs.stringify(paydata),heads).then((res) =>{
          this.ordersOrderNoList = res.data.ordersOrderNoList;
        }).catch((error) =>{
          console.log(error);
        })
      },
      closeModal(){
        this.isModelVisible = false;
      },
      openModal() {
        this.isModelOpen = true;
      },
      reModal(){
        this.isModelOpen = false;
      },
      back(){
        return this.$router.go(-1);
      },
      add(){
        this.count++;
        console.log(this.$refs.totalamount);
        this.$refs.totalamount.innerText = parseFloat(this.$refs.price.innerText * this.count).toFixed(2);
      },
      sub(){
        if(this.count < 1){
          return;
        }
        this.count--;
        this.$refs.totalamount.innerText = parseFloat(this.$refs.price.innerText * this.count).toFixed(2);
      },
      toggle(){
        this.isA = !this.isA;
      },
      byValue(){
        this.$refs.nowTotal.innerText = this.$refs.totalamount.innerText;
      },
      payment(){
        let todata = {
          userId:"3",
          requestId:new Date().getTime(),
          ordersOrderNoList:JSON.stringify(this.ordersOrderNoList),
          realPayAmount:parseFloat(this.$refs.totalamount.innerText),
          useIntegralFlag:"0",
          payType:"0",
          payChannel:"0",
          orgId:"",
          param:"",
          productId:this.parms.productId
        }
        this.$axios.post(this.restopay,Qs.stringify(todata),heads).then((res) =>{
          Console.log(res);
        }).catch((err) =>{

        })
      }
    },
    mounted(){
      this.$refs.cot.value= this.$route.query.counter;
      this.count = this.$route.query.counter;
      this.parms.merchantId = this.$route.query.merchantId;
      this.parms.productId = this.$route.query.productId;
      this.merchantName = this.$route.query.merchantName;
      console.log(this.$refs.price)
      console.log(this.count)
      /*请求参数*/
      console.log(this.parms)
      this.$axios.post(this.respayurl,Qs.stringify(this.parms),heads).then((res) =>{

        /*响应参数*/
          console.log(res);
          this.addressId = res.data.addressId;
          this.username = res.data.username;
          this.mobilePhone= res.data.mobilePhone;
          this.address= res.data.address;
          this.merchantName = res.data.merchantName;
          this.productName = res.data.productName;
          this.productPicIndex = res.data.productPicIndex;
          this.productPrice= res.data.productPrice;
          this.specificationParamList = res.data.specificationParamList;
          this.specificationKey = res.data.specificationKey;
          this.specificationKeyName = res.data.specificationKeyName;
          this.specificationValue = res.data.specificationValue;
          this.couponList= res.data.couponList;
          this.productFreightAmount = res.data.productFreightAmount;
          this.availableIntegral = res.data.availableIntegral;
          this.invoiceFreightAmount = res.data.invoiceFreightAmount;
          this.$refs.totalamount.innerText = parseFloat(res.data.productPrice * this.count).toFixed(2);
      }).catch((error) =>{
        console.log(error.message);
      })
    }
  }
</script>

<style scoped>
  @import '../../assets/css/order/order.css';
  @import '../../assets/css/order/payment.css';
  @import '../../assets/css/order/surepay.css';
</style>
