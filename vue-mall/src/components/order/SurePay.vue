<template>
  <div class="sure-pay">
    <div class="modal-backdrop">
      <div class="modal model-center">
          <div class="sure-p">
              <h3>确定放弃支付</h3>
              <p>您的订单将留存在待支付中48小时请尽快完成支付</p>
          </div>
          <div class="btn">
            <button>离开</button><button>继续支付</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sure-pay"
    }
</script>

<style scoped>
  @import '../../assets/css/order/surepay.css';
</style>
