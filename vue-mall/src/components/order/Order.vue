<template>
  <div class="order">
      <div class="head w10">
        <a class="category fl">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a class="msg">填写订单</a>
      </div>
      <div class="content">
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
              <p class="price">￥140.00</p>
            </div>
          </div>
          <div class="panel-count">
            <div class="p-t clearfix">
              <span class="txt fl">数量</span>
              <div class="tally fr">
                <button class="sub">-</button><input type="text" name="" value="0"><button class="add">+</button>
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
            <span class="cked fr"></span>
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
            <i>￥145.00</i>
        </p>
        <button class="fr" type="button">立即购买</button>
      </div>
  </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>
  @import '../../assets/css/order/order.css';
</style>
