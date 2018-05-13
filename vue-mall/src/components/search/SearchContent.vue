<template>
    <div class="search-content">
        <div class="hot" v-show="show">
            <h3>热门搜索</h3>
            <ul>
              <li>日用百货</li>
              <li>零食大礼包</li>
              <li>洗发用品</li>
              <li>美妆</li>
              <li>香脆烤鸭店</li>
              <li>金锣火腿</li>
              <li>护肤</li>
            </ul>
        </div>
        <div class="history" v-show="show">
          <h3 class="clearfix">
            <span class="fl">历史搜索</span>
            <span class="fr">清除</span>
          </h3>
          <ul>
            <li>娱乐KTV</li>
            <li>惊奇历险记</li>
            <li>普洱红茶</li>
            <li>眼影</li>
            <li>稻香村面点</li>
            <li>山东煎饼</li>
            <li>鲜虾</li>
            <li>孔府家酒</li>
          </ul>
        </div>
      <ul class="search-list">
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
        <li>火锅底料</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "search-content",
        data(){
          return{
            show:false
          }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/search/search-c.css";
</style>
