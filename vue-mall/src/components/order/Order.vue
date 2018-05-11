<template>
  <div class="order">
      <div class="head w9-m">
        <a class="category fl">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a class="msg">填写订单</a>
      </div>
      <div class="content w9-m">
        <div class="address">
          <p class="concat">
            <span>王大伟</span>
            <span>13800138000</span>
          </p>
          <i class="iconfont icon-jiantouyou fr"></i>
          <p class="text">
            北京市海淀区中关村东路18号财智国际大厦A座3层503
          </p>
        </div>
        <img class="botcss" src="../../assets/images/bottom.png" height="1" width="400"/>
        <div class="shop">
          <p class="shop-t">坚果杂货铺<i class="iconfont icon-jiantouyou"></i></p>
          <div class="panel-img">
            <img src="../../assets/images/shop-img.png" height="80" width="80"/>
            <div class="explain">
              <p>内蒙古牛肉干精选上乘内蒙古牛
                肉干精选上乘
              </p>
              <span>规格:500g</span>
              <p class="price">￥140.00</p>
            </div>
          </div>
          <div class="panel-count">
            <div class="p-t clearfix">
              <span class="fl">数量</span>
              <div class="tally fr">
                <span>-</span>
                <input type="text">
                <span>+</span>
              </div>
            </div>
            <div class="fare">
              <span class="fl">运费</span>
              <span class="fr">$0.00</span>
            </div>
          </div>
          <div class="act fl">
              <div class="">
                <span>优惠卷</span>
                <span>暂无可用</span>
              </div>
              <div class="">
                <span>使用积分</span>
                <span></span>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style>
  @import '../../assets/css/common.css';
  @import '../../assets/css/product/iconfont.css';
  @import '../../assets/css/order/order.css';
</style>
