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
				<view class="bg-white nav-li" style="height: 400upx;margin-top: 40upx;">
					<view class="cu-bar bg-white solid-bottom">
						<view class="action">
							<text class="cuIcon-title text-theme "></text> 下节课
						</view>
						<view class="action">
							<text class="today">2019-08-16</text>
							<view class="cu-tag bg-theme round shadow-warp" style="color: #fff;">
								星期五
							</view>
						</view>
					</view>
					<view class="padding next-class">
						<view class="un-login-auth">
							<button class="cu-btn round lg bg-theme display-none" style="color: #fff;">未登录</button>
							<button class="cu-btn round lg bg-theme display-none" style="color: #fff;">同步数据</button>
						</view>
						<view class="class-card">
							<view class="cu-item">
								<view class="content">
									<view class="week text-theme">
										<text>
											15
											<text class="week-text">周</text>
										</text>
									</view>
									<view class="desc">
										<view class="text-content">
											<view class="class-name">
												<text>
													大学生心理健康教育
												</text>
											</view>
										</view>
										<view class="class-info">
											<view class="cu-tag bg-olive light round class-time" style="font-size: 26upx;">时间：8:00 - 9:00</view>
											<view class="cu-tag bg-cyan light round" style="font-size: 26upx;">禹兴园3-214</view>
											<view class="cu-tag bg-green light round" style="font-size: 26upx;">杨永青</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>
				<view class="bg-white nav-li box-list" style="height: 150upx;margin-top: 30upx;">
					<view class="home-b" hover-class="hover-on" v-on:click="showMore('food')">
						<image src="/static/food.png" mode="widthFix" class="box-icon"></image>
						<text>美食外卖</text>
					</view>
					<view class="home-b" hover-class="hover-on" v-on:click="showMore('run')">
						<image src="/static/run.png" mode="widthFix" class="box-icon"></image>
						<text>跑腿服务</text>
					</view>
					<view class="home-b" hover-class="hover-on" v-on:click="showMore('shop')">
						<image src="/static/shop.png" mode="widthFix" class="box-icon"></image>
						<text>生活百货</text>
					</view>
					<view class="home-b" hover-class="hover-on" v-on:click="showMore('business')">
						<image src="/static/business.png" mode="widthFix" class="box-icon"></image>
						<text>合作申请</text>
					</view>
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
			showMore: function(name) {
				switch (name) {
					case "food":
						uni.showToast({
							title: '不日上线',
							icon: 'none'
						});
						break;
					case "run":
						uni.showToast({
							title: '不日上线',
							icon: 'none'
						});
						break;
					case "shop":
						uni.showToast({
							title: '不日上线',
							icon: 'none'
						});
						break;
					case "business":
						uni.showToast({
							title: '不日上线',
							icon: 'none'
						});
						break;
				}
			}
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

	.box-list {
		display: flex;
		justify-content: space-between;

	}

	.box-li {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-top: 30upx;
		padding-bottom: 30upx;
	}

	.box-li:first-child {
		padding-left: 10upx;
		border-radius: 15upx 0 0 15upx;
	}

	.box-li:last-child {
		padding-right: 10upx;
		border-radius: 0 15upx 15upx 0;
	}

	.box-icon {
		width: 30%;
		display: block;
		margin: 0 auto;
	}

	.box-li text {
		text-align: center;
		font-size: 28upx;
	}

	.home-b {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}

	.home-b:first-child {
		padding-left: 10upx;
		border-radius: 15upx 0 0 15upx;
	}

	.home-b:last-child {
		padding-right: 10upx;
		border-radius: 0 15upx 15upx 0;
	}

	.home-b>text {
		color: var(--gray);
		text-align: center;
		font-size: 22upx;
	}

	.today {
		padding-right: 30upx;
	}

	.class-card {
		height: 240upx;
		display: block;
		overflow: hidden;
	}

	.class-card>.cu-item {
		height: 240upx;
		display: block;
		background-color: var(--white);
		overflow: hidden;
		border-radius: 10upx;
	}

	.class-card>.cu-item .content {
		height: 240upx;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.class-card>.cu-item .desc {
		height: 240upx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.class-card>.cu-item .content .text-content {
		font-size: 28upx;
		color: #888;
		height: 4.8em;
		overflow: hidden;
	}

	.next-class {
		min-height: 300upx;
		border-radius: 0 0 15upx 15upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.week {
		width: 200upx;
		height: 240upx;
		margin-right: 20upx;
	}

	.week text {
		font-size: 120upx;
		line-height: 240upx;
	}

	.week-text {
		font-size: 46upx !important;
		padding-left: 10upx;
	}

	.class-name {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.class-name text {
		font-size: 40upx;
		text-align: center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.class-info {
		margin: 0 auto;
		width: 320upx;
	}

	.class-time {
		width: 100%;
		margin-bottom: 10upx;
	}
</style>
