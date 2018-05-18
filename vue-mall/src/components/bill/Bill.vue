<template>
  <div class="bill">
    <header>
      <div class="head w9-2">
        <a class="bill-back fl">
          <i class="iconfont icon-fanhui" @click="back"></i>
        </a>
        <a class="msg">发票信息</a>
        <a class="fr" @click="back">完成</a>
      </div>
   </header>
    <div class="radio">
      <div class="text">
        <label class="clp">抬头<i class="must">*</i></label>
        <input type="text" placeholder="名称(必填)" name="bill" value="" ref="rise"/>
      </div>
    </div>
    <div class="radio">
      <div class="peop">
        <i :class="{cked:show,uck:!show}" @click="changeClass" ref="person"></i>
        <label class="sel">个人</label>
      </div>
      <div class="comp">
        <i :class="{cked:!show,uck:show}" @click="changeClass" ref="company"></i>
        <label class="sel">公司</label>
      </div>
    </div>
    <div class="pesornal" v-show="show">
      <div class="text">
        <label>收票人手机<i class="must">*</i></label>
        <input type="text" placeholder="收票人手机号" name="" :value="peopData.mobilePhone" ref="phone"/>
      </div>
      <div class="text">
        <label>税号<i class="must">*</i></label>
        <input type="text" placeholder="填写纳税识别号(必填)" name="bill" value="" ref="pduty"/>
      </div>
    </div>
    <div class="company" v-show="!show">
      <div class="text">
        <label>税号<i class="must">*</i></label>
        <input type="text" placeholder="填写纳税识别号(必填)" name="bill" value="" ref="cduty"/>
      </div>
      <!--<div class="text">
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
      </div>-->
    </div>
   <!-- <div class="radio">
      <div class="peop">
        <i :class="{cked:isBill,uck:!isBill}" @click="changeBill"></i>
        <label class="sel">纸质</label>
      </div>
      <div class="comp">
        <i :class="{cked:!isBill,uck:isBill}" @click="changeBill"></i>
        <label class="sel">电子发票</label>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: "bill",
    data(){
      return{
        show:true,
        isBill:true,
        peopData:{
          invoiceType:"0",
          mobilePhone:"",
        },
        companyData:{
          invoiceType:"1",
        }
      }
    },
    methods:{
      back:function(){
        this.$router.go(-1);
        if(this.$refs.person.getAttribute("class") == "cked"){
          localStorage.setItem("invoiceType",this.peopData.invoiceType)
          localStorage.setItem("rise",this.$refs.rise.value)
          localStorage.setItem("duty",this.$refs.pduty.value)
          localStorage.setItem("mobilePhone",this.$refs.phone.value)
        }

        if(this.$refs.company.getAttribute("class") == "cked"){
          localStorage.setItem("invoiceType",this.companyData.invoiceType)
          localStorage.setItem("rise",this.$refs.rise.value)
          localStorage.setItem("duty",this.$refs.cduty.value)
        }
      },
      changeClass(){
        this.show = !this.show;
      },
      changeBill(){
        this.isBill = !this.isBill;
      }
    },
    mounted(){
      this.peopData.mobilePhone = this.$route.query.mobilePhone;
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/bill/bill.css';
</style>
