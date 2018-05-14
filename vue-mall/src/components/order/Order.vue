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
            <span>乌拉</span>
            <span>13800138000</span>
          </p>
          <i class="iconfont icon-jiantouyou fr"></i>
          <p class="text">
            北京市海淀区中关村东路18号财智国际大厦A座3层503
          </p>
        </div>
        <div><img class="botcss" src="../../assets/images/bottom.png" height="1" width="400"/></div>
        <div class="shop">
          <h3 class="shop-t">坚果杂货铺<i class="iconfont icon-jiantouyou"></i></h3>
          <div class="panel-img">
            <img src="../../assets/images/shop-img.png" height="80" width="80"/>
            <div class="explain">
              <p>内蒙古牛肉干精选上乘内蒙古牛
                肉干精选上乘
              </p>
              <span>规格:&nbsp;500g</span>
              <p class="price">￥<span class="price" ref="price">140.00</span></p>
            </div>
          </div>
          <div class="panel-count">
            <div class="p-t clearfix">
              <span class="txt fl">数量</span>
              <div class="tally fr">
                <button class="sub" @click="sub">-</button><input type="text" name="" value="0" v-model="count"><button class="add" @click="add">+</button>
              </div>
            </div>
            <div class="fare clearfix">
              <span class="txt fl">运费</span>
              <span class="txt fr">$0.00</span>
            </div>
          </div>
        </div>
        <div class="act">
          <div class="act-j clearfix">
            <span class="fl">优惠卷</span>
            <span class="fr">暂无可用</span>
          </div>
          <div class="act-f clearfix">
            <span class="fl">使用积分<i>可用积分200</i></span>
            <span class="cked fr" :class="{'cked':isA,'uck':!isA}" @click="toggle"></span>
          </div>
        </div>
        <div class="issue clearfix">
            <span class="fl">发票</span>
            <i class="iconfont icon-jiantouyou fr"></i>
        </div>
        <div class="settle">
            <p class="clearfix">
              <span class="fl">商品金额</span>
              <i class="fr">￥145.00</i>
            </p>
            <p class="clearfix">
              <span class="fl">邮费</span>
              <i class="fr">￥145.00</i>
            </p>
            <p class="clearfix">
              <span class="fl">发票运费</span>
              <i class="fr">￥145.00</i>
            </p>
            <p class="clearfix">
              <span class="fl">优惠券抵扣</span>
              <i class="fr">￥145.00</i>
            </p>
            <p class="clearfix">
              <span class="fl">积分抵扣</span>
              <i class="fr">￥145.00</i>
            </p>
        </div>
      </div>
      <div class="foot w10 clearfix">
        <p class="category fl">
            <span>实付金额:</span>
            <i ref="totalamount">￥140.00</i>
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
                  <span>汇通卡支付</span>
                </p>
                <span class="uck fr"></span>
              </li>
              <li class="clearfix">
                <p class="fl">
                  <img>
                  <span>汇通卡支付</span>
                </p>
                <span class="uck fr"></span>
              </li>
            </ul>

              <div class="now-d">
                <router-link to="/paysuccess">
                  <button class="now-p">立即支付(￥<span ref="nowTotal">145.00</span>)</button>
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
  export default {
    name: "order",
    data(){
      return{
        isModelVisible:false,
        isModelOpen:false,
        isA:false,
        count:0,
      }
    },
    methods:{
      showModal(){
        this.isModelVisible = true;
      },
      closeModal(){
        this.isModelVisible = false;
      },
      openModal(){
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
        console.log(this.$refs.totalamount.innerText);
        this.$refs.totalamount.innerText = parseFloat(this.$refs.price.innerText * this.count).toFixed(2);
      },
      sub(){
        if(this.count < 1){
          return;
        }
        this.count--;
        this.$refs.totalamount.innerText = parseFloat(this.$refs.price.innerText * this.count).toFixed(2  );
      },
      toggle(){
        this.isA = !this.isA;
      },
      byValue(){
        this.$refs.nowTotal.innerText = this.$refs.totalamount.innerText;
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/order/order.css';
  @import '../../assets/css/order/payment.css';
  @import '../../assets/css/order/surepay.css';
</style>
