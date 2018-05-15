<template>
  <div class="category-side clearfix">
    <div class="menu-wrapper" ref="menuWrappers">
      <ul class="category-l fl">
          <li v-for="(item,index) in topdata" @click="cate(item.childCatalogList)">{{item.catalogName}}</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
          <li>苹果</li>
      </ul>
    </div>
    <div class="category-content clearfix">
      <ul class="img-l fr" >
 <!--       v-for="(item,index) in topdata"-->
 <!--       <li v-for="(ite,index1) in item.childCatalogList">
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>{{ite.catalogName}}</p>
            </router-link>
          </a>
        </li>     -->
        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li>        <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li> <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li> <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li> <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
            </router-link>
          </a>
        </li> <li>
          <a>
            <router-link to="/categorylist">
              <img src="../../assets/images/category.jpg" height="50" width="50"/>
              <p>休闲食品</p>
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
              scrollX: 0,
              scrollY: 0,
              listHeight: [],
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
          /*cate:function(childCatalogs){
            let doms;
              for(let i = 0,legth = childCatalogs.length;i<legth;i++){
                  doms = '<li>+<a>+<router-link to="/categorylist"> <img src="../../assets/images/category.jpg" height="50" width="50"/>
                            <p>$(childCatalogs[i].catalogName)</p>
                          </router-link>
                        </a>
                      </li>'
              }
              console.log(doms)
          }*/
        }
    }
</script>

<style scoped>
  @import '../../assets/css/category/category-s.css';
  @import '../../assets/css/category/category-c.css';
</style>
