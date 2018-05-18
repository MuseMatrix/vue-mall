<template>
  <div class="category-side clearfix">
    <div class="menu-wrapper" ref="menuWrappers">
      <ul class="category-l fl">
          <li v-for="(item,index) in topdata" @click="cate(index)" :class="{active:index == num}">{{item.catalogName}}</li>
      </ul>
    </div>
    <div class="category-content clearfix">
      <ul class="img-l fr" v-for="(item,index) in topdata" v-if="index == num">
        <li v-for="(ite,index1) in item.childCatalogList">
          <a>
            <router-link :to="{name:'categorylist',query:{id:item.catalogId}}">
              <img :src="srcurl+ite.catalogPicIndex" height="50" width="50"/>
              <p>{{ite.catalogName}}</p>
            </router-link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
        name: "category-side",
        props:["topdata"],
        data(){
            return{
                num:0,
                srcurl:"https://jhoss02.oss-cn-beijing.aliyuncs.com/",
            }
        },
        created:function () {
          this.$nextTick(() => {
            this._initScroll();
          });
        },
        methods:{
          _initScroll:function () {
            this.meunScroll = new BScroll(this.$refs.menuWrappers, {
              click: true
            });
          },
          cate:function(index) {
            this.num = index;
          }
        }
    }
</script>

<style scoped>
  @import '../../assets/css/category/category-s.css';
  @import '../../assets/css/category/category-c.css';
</style>
