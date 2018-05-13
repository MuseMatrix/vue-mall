<template>
  <div class="bill">
    <header>
      <div class="head w9-2">
        <a class="bill-back fl">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a class="msg">发票信息</a>
        <a class="fr">完成</a>
      </div>
   </header>
    <div class="radio">
      <div class="text">
        <label class="clp">抬头<i class="must">*</i></label>
        <input type="text" placeholder="个人名称(必填)" name="bill"/>
      </div>
    </div>
    <div class="radio">
      <div class="peop">
        <i class="cked"></i>
        <label class="sel">个人</label>
      </div>
      <div class="comp">
        <i class="uck"></i>
        <label class="sel">公司</label>
      </div>
    </div>
    <div class="pesornal" v-show="show">
      <div class="text">
        <label>收票人手机<i class="must">*</i></label>
        <input type="text" placeholder="个人名称(必填)" name="" value="180****0727"/>
      </div>
    </div>
    <div class="company">
      <div class="text">
        <label>税号<i class="must">*</i></label>
        <input type="text" placeholder="填写纳税识别号(必填)" name="bill"/>
      </div>
      <div class="text">
        <label>开户银行</label>
        <input type="text" placeholder="可选填" name="bill"/>
      </div>
      <div class="text">
        <label>银行账户</label>
        <input type="text" placeholder="可选填" name="bill"/>
      </div>
      <div class="text">
        <label>单位地址</label>
        <input type="text" placeholder="可选填" name="bill"/>
      </div>
      <div class="text">
        <label>电话号码</label>
        <input type="text" placeholder="可选填" name="bill"/>
      </div>
    </div>
    <div class="radio">
      <div class="peop">
        <i class="uck"></i>
        <label class="sel">纸质</label>
      </div>
      <div class="comp">
        <i class="cked"></i>
        <label class="sel">电子发票</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bill",
    data(){
      return{
        "show":false
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/bill/bill.css';
</style>
