<template>
    <div class="pay-success bgc">
      <header>
        <div class="head w9-2">
          <a class="bill-back fl">
            <i class="iconfont icon-fanhui" @click="back"></i>
          </a>
          <a class="msg">支付结果</a>
          <a class="fr">完成</a>
        </div>
      </header>
      <div class="pay-s">
        <div class="success-text">
          <p>恭喜你支付成功</p>
          <p>我们将尽快为你发货</p>
        </div>
      </div>
      <div class="w9-m snack-goods clbg">
        <h2 class="goods-title">
          <span>—— 猜你喜欢 ——</span>
        </h2>
        <ul class="clearfix">
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
          <li>
            <img src="../../assets/images/3.jpg" width="105" height="105">
            <p>我的健康我做主  </p>
            <p>￥30<span>官方</span></p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "pay-success",
        methods:{
          back(){
            return this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  @import '../../assets/css/pay/paysuccess.css';
  @import '../../assets/css/home/content.css';
</style>
