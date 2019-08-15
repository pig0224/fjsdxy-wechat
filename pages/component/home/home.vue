<template>
	<view>		
		<scroll-view scroll-y class="page">
			<image src="/static/home_bg.png" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<view class="bg-white nav-li box-list" style="height: 200upx;">
					<navigator class="box-li" hover-class="hover-on">
						<image src="/static/source.png" mode="widthFix" class="box-icon"></image>
						<text>成绩</text>
					</navigator>
					<navigator class="box-li" hover-class="hover-on">
						<image src="/static/leave.png" mode="widthFix" class="box-icon"></image>
						<text>请假</text>
					</navigator>
					<navigator class="box-li" hover-class="hover-on">
						<image src="/static/card.png" mode="widthFix" class="box-icon"></image>
						<text>一卡通</text>
					</navigator>
				</view>
				<view class="bg-white nav-li" style="height: 500upx;margin-top: 35upx;">
					<view class="cu-bar bg-white solid-bottom">
						<view class="action">
							<text class="cuIcon-title text-theme "></text> 周五 课程
						</view>
						<view class="action">
							<view class="cu-tag bg-theme round shadow-warp" style="color: #fff;">
								24 周
							</view>
						</view>
					</view>
					<view class="no-cas">
						<button class="cu-btn round lg bg-theme" style="color: #fff;">同步数据</button>
					</view>
				</view>
				<view class="bg-white nav-li box-list" style="height: 150upx;margin-top: 20upx;">
					<navigator class="home-b" hover-class="hover-on">
						<image src="/static/food.png" mode="widthFix" class="box-icon"></image>
						<text>美食外卖</text>
					</navigator>
					<navigator class="home-b" hover-class="hover-on">
						<image src="/static/run.png" mode="widthFix" class="box-icon"></image>
						<text>跑腿服务</text>
					</navigator>
					<navigator class="home-b" hover-class="hover-on">
						<image src="/static/shop.png" mode="widthFix" class="box-icon"></image>
						<text>生活百货</text>
					</navigator>
					<navigator class="home-b" hover-class="hover-on">
						<image src="/static/business.png" mode="widthFix" class="box-icon"></image>
						<text>合作申请</text>
					</navigator>
				</view>
			</view>					
			<view class="cu-tabbar-height"></view>			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		onReady: function() {

		}
	}
</script>

<style>
	.page {
		height: 100vh;
		padding-bottom: 30upx;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 40upx 30upx 0 30upx;
		justify-content: space-between;
	}

	.nav-li {
		border-radius: 15upx;
		width: 100%;
		z-index: 1;
		box-shadow: 0px 0px 5upx #EEEEEE;
	}
	.box-list{
		display: flex;
		justify-content: space-between;
		
	}
	.box-li{
		width: 100%;
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		padding-top: 30upx;
		padding-bottom: 30upx;
	}
	.box-li:first-child{
		padding-left: 10upx;
		border-radius: 15upx 0 0 15upx;
	}
	.box-li:last-child{
		padding-right: 10upx;
		border-radius: 0 15upx 15upx 0;
	}
	.box-icon{
		width: 30%;
		display: block;
		margin: 0 auto;
	}
	.box-li text{
		text-align: center;
		font-size: 28upx;
	}
	.home-b{
		width: 100%;
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
	.home-b:first-child{
		padding-left: 10upx;
		border-radius: 15upx 0 0 15upx;
	}
	.home-b:last-child{
		padding-right: 10upx;
		border-radius: 0 15upx 15upx 0;
	}
	.home-b > text{
		color: var(--gray);
		text-align: center;
		font-size: 22upx;
	}
	.no-cas{
		display: flex;
		justify-content: center;
		padding-top: 140upx;
	}
	
</style>
