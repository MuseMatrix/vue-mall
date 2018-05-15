<template>
    <div class="product">
        <div class="wrap w10">
            <!--详情头部区-->
            <ProductHeaderView></ProductHeaderView>
            <!--详情图片说明区-->
            <ProductImageView></ProductImageView>
            <!--详情规格区域-->
            <ProductSpecView></ProductSpecView>
            <!--详情足部区域-->
            <ProductFooterView></ProductFooterView>
            <!--详情足部区域-->
            <ProductBottomView></ProductBottomView>

        </div>
    </div>
</template>

<script>
    import ProductHeaderView from './ProductHeader.vue';
    import ProductImageView from './ProductImage.vue';
    import ProductSpecView from './ProductSpec.vue';
    import ProductFooterView from './ProductFooter.vue';
    import ProductBottomView from './ProductBottom.vue';

    const url = "http://192.168.1.188:8080/malls-provider-http";

    export default {
        name: "product",
        data(){
          return{

          }
        },
        components:{
            ProductHeaderView,
            ProductImageView,
            ProductSpecView,
            ProductFooterView,
            ProductBottomView
        }
    }
</script>

<style scoped>
  @import '../../assets/css/product/product.css';
</style>
