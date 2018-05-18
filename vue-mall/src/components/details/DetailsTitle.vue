<template>
  <div class="details-title">
      <ul class="d-title">
          <li v-for="(item,index) of menuls"><router-link :to="item.path">{{item.text}}</router-link></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "details-title",
        data(){
          return{
            menuls:[
              {text:"商品介绍",path:"/details"},
              {text:"规格参数",path:"/spec"},
              {text:"售后服务",path:"/afterservice"},
            ]
          }
        },
    }
</script>

<style scoped>
  @import '../../assets/css/details/details-t.css';
</style>
