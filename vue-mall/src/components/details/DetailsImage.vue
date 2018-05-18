<template>
    <div class="details-image w9-m">
        <ul>
          <li v-for="(item,index) in productIntroduceList"><img :src="srcurl+item.picIndex"/></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "details-image",
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
            productIntroduceList:""
          }
        },
        mounted(){
            this.productIntroduceList = JSON.parse(localStorage.getItem("productIntroduceList"));
        }
    }
</script>

<style scoped>
  @import '../../assets/css/details/detail-I.css';
</style>
