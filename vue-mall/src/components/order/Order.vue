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
          <a href="http://192.168.1.141:8091/wx/LL_addNewAddress.html" v-if="detailAddress != ''">
            <p class="concat">
              <span>{{username}}</span>
              <span>{{mobilePhone}}</span>
            </p>
            <i class="iconfont icon-jiantouyou fr"></i>
            <p class="text">
              北京市海淀区上地大厦{{detailAddress}}
            </p>
          </a>
          <a href="http://192.168.1.141:8091/wx/LL_addNewAddress.html" v-else>
            <p class="concat">
              <span>{{username}}</span>
              <span>{{mobilePhone}}</span>
            </p>
            <i class="iconfont icon-jiantouyou fr"></i>
            <p class="text">
              请添加收货地址
            </p>
          </a>
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
    	<div class="qrjk" v-show="isModelVisible">
        <div class="modal-backdrop">
          <div class="modal">
            <ul class="q_ul">
                <li class="li1"><i class="iconfont icon-guanbi fl" @click="sureclose"></i>确认支付</li>
                <li class="li2">
                    <h4 class="money" ref="nowTotal"></h4>
                    <div><span class="sp1">订单信息</span><span class="sp2">付款</span></div>
                  </li>
                 <li class="li3">
                    <div><span class="sp1">付款方式</span><span class="sp2" id="yhang" @click="selpay" ref="way">请选择支付</span></div>
                  </li>
                <li class="li4" @click="payment">确认</li>
              </ul>
          </div>
        </div>
    	</div>
      <div class="payment" v-show="ispayway">
        <div class="modal-backdrop">
          <div class="modal">
            <div class="pay-t">
              <i class="iconfont icon-guanbi" @click="openModal"></i>
              <h4>选择支付方式</h4>
            </div>
            <ul>
              <li class="clearfix" v-for="(item,index) in TypeChannels" @click="selectpay(index)">
                <div class="clearfix scan-d">
                  <p class="fl">
                    <img>
                    <span ref="pasname">{{item.name}}</span>
                  </p>
                  <i class="iconfont icon-jiantouyou fr" v-if="item.name != '扫码支付'"></i>
                </div>
               <ul class="ScanPay clearfix" v-if="item.name == '扫码支付'">
                  <li> </li>
                  <li class="clearfix scan-d" @click="selectpay(0)">
                    <p class="fl">
                      <span ref="pasname">微信扫码支付</span>
                    </p>
                    <i class="iconfont icon-jiantouyou fr"></i>
                  </li>
                  <li class="clearfix scan-d" @click="selectpay(1)">
                    <p class="fl">
                      <span ref="pasname">支付宝扫码支付</span>
                    </p>
                    <i class="iconfont icon-jiantouyou fr"></i>
                  </li>
                  <li class="clearfix scan-d" @click="selectpay(2)">
                    <p class="fl">
                      <span ref="pasname">一码支付</span>
                    </p>
                    <i class="iconfont icon-jiantouyou fr"></i>
                  </li>
                </ul>
              </li>
              <!--<li class="clearfix">
                <p class="fl">
                  <img>
                  <span>余额支付</span>
                </p>
                <span class="cked fr"></span>
              </li>
              <li class="clearfix">
                <div class="clearfix scan-d">
                  <p class="fl">
                    <img>
                    <span>扫码支付</span>
                  </p>
                  <span class="uck fr"></span>
                </div>
                <ul class="ScanPay clearfix">
                  <li class="clearfix">
                    <p class="fl">
                      <span>微信扫码支付</span>
                    </p>
                    <span class="uck fr"></span>
                  </li>
                  <li class="clearfix">
                    <p class="fl">
                      <span>支付宝扫码支付</span>
                    </p>
                    <span class="uck fr"></span>
                  </li>
                  <li class="clearfix">
                    <p class="fl">
                      <span>一码支付</span>
                    </p>
                    <span class="uck fr"></span>
                  </li>
                </ul>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>微信支付</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>快捷支付</span>
                </p>
                <span class="uck fr"></span>
              </li>-->
            </ul>
 <!--             <div class="now-d">
                <router-link to="">
                  <button class="now-p" @click="payment">立即支付(<span ref="nowTotal"></span>)</button>
                </router-link>
              </div>-->
          </div>
        </div>
      </div>
     <!-- <div class="sure-pay" v-show="isModelOpen">
        <div class="modal-backdrop">
          <div class="modal model-center">
            <div class="sure-p">
              <h3>确定放弃支付</h3>
              <p>您的订单将留存在待支付中48小时请尽快完成支付</p>
            </div>
            <div class="btn">
              <button @click="reModal();closeModal();">离开</button><router-link to=""><button class="con">继续支付</button></router-link>
            </div>
          </div>
        </div>
      </div>-->
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
        num:0,
        TypeChannels:[
          {name:"余额支付",info:[{type:0,channel:4}]},
          {name:"扫码支付",info:[{type:3,channel:0},{type:3,channel:1},{type:1,channel:6}]},
          {name:"微信支付",info:[{type:1,channel:0}]},
          {name:"支付宝支付",info:[{type:1,channel:1}]},
          {name:"快捷支付",info:[{type:1,channel:3}]},
          {name:"汇通卡支付",info:[{type:11,channel:5}]},
        ],
        srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
        respayurl:"api/api/malls/pay/queryMallsProductPayInfo",
        resorderurl:"api/api/malls/order/getOrdersOrderNo",
        restopay:"api/api/malls/pay/makeMallsOrder",
        ispayway:false,
        isModelVisible:false,
        isModelOpen:false,
        isA:false,
        isP:false,
        payType:"",
        payChannel:"",
        ordersOrderNoList:"",
        count:0,
        parms:{
          userId:"JM081802280001",
          requestId:new Date().getTime(),
          merchantId:"",
          productId:"",
        },
        addressId:"",
        username:"",
        mobilePhone:"",
        detailAddress:"",
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
          userId: "JM081802280001"
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
      sureclose(){
        this.isModelVisible = false;
      },
      selpay(){
        this.isModelVisible = false;
        this.ispayway = true;
      },
      selectpay(idx){

        this.$refs.way.innerText = this.$refs.pasname[idx].innerText;
        this.ispayway =false;
        this.isModelVisible = true;
        this.payType = this.TypeChannels[idx].info[0].type;
        this.payChannel = this.TypeChannels[idx].info[0].channel;
      },
      openModal() {
        this.isModelOpen = true;
        this.ispayway = false;
      },
      reModal(){
        this.isModelOpen = false;
      },
      back(){
        return this.$router.go(-1);
      },
      cate:function(index) {
        this.num = index;
        this.payType = index;
        this.payChannel = index;
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
        this.$refs.nowTotal.innerText = "￥"+this.$refs.totalamount.innerText;
      },
      fastpay:function(paydata){
        location.href = paydata.PostUrl + '?' + paydata.PostData;
      },
      payment(){
        let todata = {
          userId:"JM071804200002",
          requestId:new Date().getTime(),
          ordersOrderNoList:JSON.stringify(this.ordersOrderNoList),
          realPayAmount:parseFloat(this.$refs.totalamount.innerText),
          useIntegralFlag:"0",
          payType:this.payType,
          payChannel:this.payChannel,
          orgId:"0",
          param:JSON.stringify({
            PageUrl: encodeURIComponent(location.href),
            ReturnUrl: encodeURIComponent(location.href + (location.href.indexOf('?') > -1 ? '&' : '?') + 'isReturn=1'),
            ClientIP: returnCitySN.cip,
          }),
          productId:this.parms.productId
        }
        console.log(todata);
        this.$axios.post(this.restopay,Qs.stringify(todata),heads).then((res) =>{
          if(res.data.retcode == '000000'){
            this.fastpay(res.data.paydata);
          }
        }).catch((err) =>{
          console.log(error);
        })
      }
    },
    mounted(){
      this.$refs.cot.value= this.$route.query.counter;
      this.count = this.$route.query.counter;
      this.parms.merchantId = this.$route.query.merchantId;
      this.parms.productId = this.$route.query.productId;
      this.merchantName = this.$route.query.merchantName;
      /*请求参数*/
      this.$axios.post(this.respayurl,Qs.stringify(this.parms),heads).then((res) =>{

        /*响应参数*/
          console.log("+++++++"+JSON.stringify(res));
          this.addressId = res.data.addressId;
          this.username = res.data.username;
          this.mobilePhone= res.data.mobilePhone;
          this.detailAddress= res.data.detailAddress;
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
