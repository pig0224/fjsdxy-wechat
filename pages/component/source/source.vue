<template>
	<view>
		<view class="message-title">
			<text class="text-black text-bold message-text">
				消息
			</text>
		</view>
			<scroll-view scroll-y class="fixed-box" :style="scrollStyle">
				<view class="cu-list menu-avatar message-list">
					<navigator hover-class="none" url="/pages/component/message/system" navigateTo class="cu-item">
						<view class="cu-avatar round lg cuIcon-mail bg-black"></view>
						<view class="content">
							<view class="text-grey">系统消息</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									签到获得8个贝壳
								</text> </view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">5</view>
						</view>
					</navigator>
					<navigator hover-class="none" url="/pages/component/message/check" navigateTo class="cu-item">
						<view class="cu-avatar round lg cuIcon-squarecheck bg-yellowTheme"></view>
						<view class="content">
							<view class="text-grey">审核通知</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									您的 “最帅小猪” 说说通过审核啦！！
								</text> </view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">5</view>
						</view>
					</navigator>
					
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
		computed: {
			scrollStyle() {
				var CustomBar= this.CustomBar + uni.upx2px(100);	
				var style = `height: calc(100% - ${CustomBar}px);`;
				return style
			}
		},
		methods: {

		},
		onReady: function() {
			
		}
	}
</script>

<style>
	.message-title {
		height: 100upx;
		padding-left: 40upx;
		line-height: 60upx;
	}
	.message-text {
		line-height: 60upx;
		font-size: 60upx;
		box-shadow: 0 -20upx 0 var(--yellowTheme) inset;
	}
</style>
