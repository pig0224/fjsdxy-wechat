<template>
	<view>
		<view class="content bg-black">
			<view class="cu-list menu-avatar padding-bottom bg-black" style="height: 200upx;padding-top: 35upx;">
				<view class="cu-item" style="background-color: var(--black);">
					<view class="cu-avatar bg-black lg student-avatar">
						<image class="avatar-border" :lazy-load="true" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
						 mode="center"></image>
					</view>
					<view class="content student-content">
						<text class="text-grey text-white text-bold text-xxl">小猪</text>
						<text class="text-gray flex text-df">
							ID:110413
						</text>
					</view>
					<view class="action padding-right padding-bottom invite-warp">
						<view class="invite">
							<image src="/static/invited_code_ic.png"></image>
						</view>
					</view>
				</view>
			</view>
			
			<scroll-view scroll-y class="fixed-box" :style="scrollStyle">
				<view class="padding flex text-center text-grey bg-white">
					<view class="flex flex-sub flex-direction solid-right">
						<view class="text-xxl text-black">1</view>
						<view class="margin-top-sm">
							发布
						</view>
					</view>
					<view class="flex flex-sub flex-direction solid-right">
						<view class="text-xxl text-black">1</view>
						<view class="margin-top-sm">
							回复
						</view>
					</view>
					<view class="flex flex-sub flex-direction">
						<view class="text-xxl text-black">1</view>
						<view class="margin-top-sm">
							分享
						</view>
					</view>
				</view>
				
				<view class="cu-card bg-white">
					<navigator url="/pages/component/student/shells" class="cu-item bg-white shadow-warp">
						<view class="cu-list menu">
							<view class="cu-item arrow" style="height: 120upx;">
								<view class="content">
									<text class="text-black text-bold">贝壳数量</text>
								</view>
								<view class="action">
									<text class="text-blue text-yellowTheme text-bold" style="font-size: 55upx;">144</text>
								</view>
							</view>
						</view>
					</navigator>
					<view class="cu-item">
						<view class="justify-center">
							<button class="cu-btn round bg-yellowTheme shadow" style="width: 100%;height: 85upx;" @click="goShopping">
								<text class="text-black text-bold text-shadow" style="font-size: 30upx;">去购物</text>
							</button>
						</view>
					</view>
				</view>
				
				<view class="ad-swiper bg-white padding-lr">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
					 duration="500" indicator-color="#8799a3" indicator-active-color="#ffe500">
						<swiper-item>
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				
				<view class="cu-card bg-white">
					<view class="cu-item bg-white shadow-warp" style="border-radius: 50upx;">
						<view class="cu-bar bg-white">
							<view class="action">
								<text class="text-black text-bold task-text">
									新手任务
								</text>
							</view>
						</view>
						<view class="cu-list menu padding-bottom mask-list">
							<view class="cu-item">
								<view class="content">
									<text class="text-black text-bold padding-right">
										首次连续签到7天
									</text>
									<text class="text-yellowTheme text-sm">+10贝壳</text>
								</view>
								<view class="action">
									<view class="cu-tag round">
										<text class="text-black">0 / 7</text>									
									</view>
								</view>
								<view class="action" style="padding-left: 15upx;">
									<view class="cuIcon-unfold"></view>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-black text-bold padding-right">
										首次动态
									</text>
									<text class="text-yellowTheme text-sm">+10贝壳</text>
								</view>
								<view class="action">
									<view class="cu-btn round bg-yellowTheme sm">
										去发布
									</view>
								</view>
								<view class="action" style="padding-left: 15upx;">
									<view class="cuIcon-unfold"></view>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-black text-bold padding-right">
										首次评论
									</text>
									<text class="text-yellowTheme text-sm">+10贝壳</text>
								</view>
								<view class="action">
									<view class="cu-btn round bg-yellowTheme sm">
										去评论
									</view>
								</view>
								<view class="action" style="padding-left: 15upx;">
									<view class="cuIcon-unfold"></view>
								</view>
							</view>
							<view class="cu-item">
								<view class="content">
									<text class="text-black text-bold padding-right">
										首次邀请校友
									</text>
									<text class="text-yellowTheme text-sm">+10贝壳</text>
								</view>
								<view class="action">
									<view class="cu-btn round bg-yellowTheme sm">
										去邀请
									</view>
								</view>
								<view class="action" style="padding-left: 15upx;">
									<view class="cuIcon-unfold"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="cu-tabbar-height bg-white"></view>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			scrollStyle() {
				var CustomBar= this.CustomBar + uni.upx2px(200);	
				var style = `height: calc(100% - ${CustomBar}px);`;
				return style
			}
		},
		methods: {
			goShopping: function() {
				uni.showModal({
					title: '提示',
					content: '程序员正在努力开发...',
					showCancel:false
				});
			}
		},
		onReady: function() {

		}
	}
</script>

<style>
	.student-avatar {
		height: 140upx !important;
		width: 140upx !important;
	}

	.student-avatar image {
		height: 140upx !important;
		width: 140upx !important;
		border-radius: 50%;
	}

	.student-content {
		left: 190upx !important;
	}

	.invite-warp {
		width: 230upx !important;
	}

	.invite {
		width: 200upx;
		height: 145upx;
	}

	.invite image {
		width: 200upx;
		height: 145upx;
	}

	.ad-swiper {
		height: 200upx;
	}

	.ad-swiper swiper {
		height: 200upx;
		min-height: 200upx !important;
	}
	.task-text{
		line-height: 40upx;
		font-size: 40upx;
		box-shadow: 0 -10upx 0 var(--yellowTheme) inset;
	}
	.fixed-box{
		height: calc(100% - 320upx);
	}
	.mask-list>.cu-item:after{
		border: none !important;
	}
</style>
