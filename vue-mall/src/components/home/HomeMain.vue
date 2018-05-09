<template>
    <div class="HomeMain">
    	<div class="content">
			<div class="hot-goods">
				<h2>
					<span>热门商品</span>
					<p class="hot-title">推荐品质保证</p>
				</h2>
				<div class="recom-mend">
					<div class="banner2 mb20">
						<div class="swiper-container" id="swiper-two">
						    <div class="swiper-wrapper">
						        <div class="swiper-slide">
						        	<a href="">
						        		<h3>女士高端包</h3>
										<p>进口小牛皮</p>
						        		<img src="../../assets/images/1.jpg" width="105" height="105" alt="">
						        	</a>
						        </div>
						        <div class="swiper-slide">
				        	       	<a href="">
				        	       		<h3>海尔冰箱</h3>
										<p>高端品质</p>
						        		<img src="../../assets/images/2.jpg" width="105" height="105">
						        	</a>
						        </div>
						        <div class="swiper-slide">
				        	       	<a href="">
				        	       		<h3>进口草莓</h3>
										<p>配送极速达</p>
						        		<img src="../../assets/images/3.jpg" width="105" height="105">
						        	</a>
						        </div>
						        <div class="swiper-slide">
				        	       	<a href="">
				        	       		<h3>荣耀体脂秤</h3>
										<p>我的健康我做主  </p>
						        		<img src="../../assets/images/3.jpg" width="105" height="105">
						        	</a>
						        </div>
						    </div>
						</div>
					</div>
				</div>
				<a href="" class="love w10-m">
					<img src="../../assets/images/love.gif" alt="">
				</a>
				<div class="w9-m snack-goods">
					<h2 class="goods-title">
						<span>零售商品专区</span>
						<p>假一赔十放心购</p>
					</h2>
					<ul class="clearfix">
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
					</ul>
				</div>
				<a href="" class="love w10-m">
					<img src="../../assets/images/love.gif" alt="">
				</a>
				<div class="w9-m snack-goods">
					<h2 class="goods-title">
						<span>美妆商品专区</span>
						<p>假一赔十放心购</p>
					</h2>
					<ul class="clearfix">
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
					</ul>
				</div>
				<div class="w9-m snack-goods">
					<h2 class="goods-title">
						<span>—— 猜你喜欢 ——</span>
					</h2>
					<ul class="clearfix">
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
						<li>
							<img src="../../assets/images/3.jpg" width="105" height="105">
							<p>我的健康我做主  </p>
							<p>￥30<span>官方</span></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../../plugin-js/swiper-4.2.2.min.js'
    export default {
        name: "HomeMain",
         mounted(){
	      var mySwiper = new Swiper('#swiper-two', {
	        autoplay: {
	          delay: 2000,
	        },
	        slidesPerView: 3,
	        slidesPerGroup: 3,
	        spaceBetween : 1,
	        navigation: {
	          nextEl: '.swiper-button-prev',
	          prevEl: '.swiper-button-prev',
	          },
	      })
	  }
    }
</script>

<style>
	@import '../../assets/css/home/content.css';
</style>
