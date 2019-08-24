<template>
	<scroll-view scroll-y class="scrollPage">
		<view class="UCenter-bg" @click="login">
			<image src="/static/avator.jpg" class="round" mode="widthFix"></image>

			<view class="margin-top-sm">
				<text class="text-xl">小猪</text>
			</view>
			<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-wave"></image>
		</view>
		<view class="padding flex text-center text-grey bg-white shadow-warp">
			<view class="flex flex-sub flex-direction solid-right align-center">
				<view class="margin-bottom-sm">专业</view>
				<view class="text-xl text-orange text-cut" style="max-width: 200upx;">软件技术</view>
			</view>
			<view class="flex flex-sub flex-direction solid-right align-center">
				<view class="margin-bottom-sm">姓名</view>
				<view class="text-xl text-blue text-cut" style="max-width: 200upx;">陈逢柱</view>
			</view>
			<view class="flex flex-sub flex-direction align-center">
				<view class="margin-bottom-sm">班级</view>
				<view class="text-xl text-green text-cut" style="max-width: 200upx;">软件1832</view>
			</view>
		</view>
		<view class="cu-list menu margin-top-xl margin-bottom-xl shadow-lg">
			<!-- <view class="cu-item">
				<navigator class="content" url="/pages/about/test/list" hover-class="none">
					<text class="cuIcon-noticefill text-orange"></text>
					<text class="text-grey">上课通知</text>
				</navigator>
				<view class="action">
					<switch @change="MenuCard" :class="menuCard?'checked':''" :checked="menuCard?true:false"></switch>
				</view>
			</view> -->
			<view class="cu-item arrow">
				<view class="content" @click="showQrcode">
					<text class="cuIcon-appreciatefill text-red"></text>
					<text class="text-grey">赞赏支持</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="feedback">
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" url="/pages/component/student/about/about" hover-class="none">
					<text class="cuIcon-github text-grey"></text>
					<text class="text-grey">关于We水院</text>
				</navigator>
			</view>
		</view>
		<view class="cu-list menu margin-top-xl margin-bottom-xl shadow-lg">
			<view class="cu-item arrow">
				<navigator class="content" url="/pages/about/test/list" hover-class="none">
					<text class="cuIcon-newsfill text-theme"></text>
					<text class="text-grey">绑定学号</text>
				</navigator>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			showQrcode() {
				uni.previewImage({
					urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
					current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接    
				})
			},
			login() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes);
								console.log('用户昵称为：' + infoRes);
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	.scrollPage {
		height: 100vh;
	}

	.UCenter-bg {
		background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
		background-size: cover;
		height: 550upx;
		display: flex;
		justify-content: center;
		padding-top: 40upx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 150upx;
		height: 150upx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100upx;
	}

	map,
	.mapBox {
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100upx;
	}

	map,
	.mapBox {
		width: 750upx;
		height: 300upx;
	}
</style>
