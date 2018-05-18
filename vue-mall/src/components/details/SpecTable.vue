<template>
    <div class="spec-table">
      <div class="w9-m">
        <table v-for="(item,index) in specificationParamList">
          <tr>
            <td>规格编号</td>
            <td>{{specificationKey}}</td>
          </tr>
          <tr>
            <td>规格名称</td>
            <td>{{specificationKeyName}}</td>
          </tr>
          <tr>
            <td>规格值</td>
            <td>{{specificationValue}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "spec-table",
        data(){
          return{
            specificationParamList:""
          }
        },
        mounted(){
          this.specificationParamList = JSON.parse(localStorage.getItem("specificationParamList"));
        }
    }
</script>

<style scoped>
  @import '../../assets/css/details/spec-t.css';
</style>
