<template>
  <div class="now-buy-model">
    <div class="modal-backdrop">
      <div class="modal">
          <div class="product-o">
            <img src="../../assets/images/product-o.png" height="110" width="110"/>
            <div class="product-t">
              <span>￥121.00</span>
              <p>商品编号:9874635184</p>
            </div>
            <i class="iconfont icon-guanbi"></i>
          </div>
        <div class="feature">
          <h3>食品口味</h3>
          <ul>
            <li>A款儿童喜爱</li>
            <li>B款甜味算啦</li>
          </ul>
        </div>
        <div class="price">
          <span class="txt fl">购买数量</span>
          <div class="tally fr">
            <button class="sub" v-on:click="sub">-</button><input type="text" name="" value="0" v-model="count"><button class="add" @click="add">+</button>
          </div>
        </div>
        <button class="sure">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name: "now-buy-model",
    data(){
      return{
        count:0
      }
    },
    methods:{
      add:function(){
        alert(1);
        this.count++;
      },
      sub:function(){
        this.count--;
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/product/nowbuy.css';
</style>
