<template>
    <div class="details-image w9-m">
        <ul>
          <li v-for="(item,index) in productInfo.productIntroduceList"><img :src="srcurl+item.picIndex"/></li>
        </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "details-image",
        data(){
          return{
            srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
            productIntroduceList:""
          }
        },
      computed:{
        ...mapState({
            productInfo:'productInfo',
          }
        ),
      },
    }
</script>

<style scoped>
  @import '../../assets/css/details/detail-I.css';
</style>
