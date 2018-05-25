<template>
    <div class="spec-table">
      <div class="w9-m">
        <table v-for="(item,index) in productInfo.specificationParamList">
          <tr>
            <td>规格编号</td>
            <td>{{item.specificationKey}}</td>
          </tr>
          <tr>
            <td>规格名称</td>
            <td>{{item.specificationKeyName}}</td>
          </tr>
          <tr>
            <td>规格值</td>
            <td>{{item.specificationValue}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "spec-table",
        data(){
          return{
            specificationParamList:""
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
  @import '../../assets/css/details/spec-t.css';
</style>
