<template>
  <div class="now-buy-model">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <slot name="header">
            <h2>这是Modal弹框的标题</h2>
            <button type="button" class="btn-close">x</button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"> 这是Modal弹框的主体 </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"> 这是Modal弹框的脚部
            <button type="button" class="btn-green">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "now-buy-model"
    }
</script>

<style scoped>
  @import '../../assets/css/product/nowbuy.css';
</style>
