<template>
  <div name="HomeBanner">
  		<div id="main">
			<div class="banner">
				<div class="swiper-container" id="swiper-one">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide">
				        	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				        <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				         <div class="swiper-slide">
		        	       	<a href="">
				        		<img src="../../assets/images/timg.png" width="355" height="133">
				        	</a>
				        </div>
				    </div>
				    <div class="swiper-pagination page"></div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import Swiper from '../../../plugin-js/swiper-4.2.2.min.js'
    export default {
        name: "HomeBanner",
        mounted(){
	     var mySwiper = new Swiper ('#swiper-one', {
	         autoplay: {
	          autoplay: true,
	        },
	        loop:true,
	        pagination: {
	          el: '.swiper-pagination',
	        },
		  })
	  }
    }
</script>

<style>
  @import '../../assets/css/plugin/swiper.min.css';
  @import '../../assets/css/home/banner.css';
</style>
