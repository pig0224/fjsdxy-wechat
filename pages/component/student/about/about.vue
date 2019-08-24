<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true"><view slot="backText">返回</view><view slot="content">关于</view></cu-custom>
		<view class="content">
			<view class="version">
				<view class="version-title">
					<text class="title-name">We水院</text>
					<text class="version-text">{{version}}</text>
					<text class="version-text">公测</text>
				</view>
				<view @click="toggleLog">
					<text class="version-log-link update-log" v-if="!showLog">更新日志</text>
					<text class="version-log-link" v-else>简介</text>
				</view>
			</view>
			<view class="describe" v-if="!showLog">
				<text class="desc-title">简介</text>
				<view class="desc-list">
					<text class="desc-list-item">官网：http://www.fjsdxy.com</text>
					<text class="desc-list-item">Github：https://github.com/pig0224/fjsdxy-wechat</text>
				</view>
				<text class="desc-content">We水院是一款微信小程序，由福建水院学生小猪开发，有别于公众号的一种全新的连接用户与服务的方式，无需下载与安装即可在微信内被便捷地获取和传播，同时具有出色的使用体验。</text>
				<text class="desc-content">We水院是碎片化、一站式、一体化校园移动门户，适用于学生和教师，集课表、成绩、考试、空教室、学生查询、一卡通、借阅、学费、电费、报修、资讯等功能于一身。</text>
				<text class="desc-content">We水院有更好用的课表查询，本周视图、学期视图、对应日期及时钟轴，清晰明了。</text>				
				<text class="desc-content">We水院更是个百事通，校内头条、教务公告、OA公告、会议通知、学术讲座、综合新闻等，随时随地即能了解校园动态，还能预览与下载附件，掌上办公，指日可待。</text>
				<text class="desc-content">We水院更是/更有... （期待您的发现）</text>
			</view>
			<view class="log-list" v-else>
				<!-- <view class="describe">
					<view class="desc-title">
						<text class="desc-v">v0.1.4 公测版</text>
						<text class="desc-time">2017.08.02</text>
					</view>
					<text class="desc-content">修复BUG</text>
					<view class="desc-list">
						<text class="desc-list-item">修复假期不显示课表，改为显示下学期课表</text>
						<text class="desc-list-item">修复课表鬼畜抖动特效</text>
					</view>
					<text class="desc-content">优化完善</text>
					<view class="desc-list">
						<text class="desc-list-item">优化空教室可以多选时间段查询</text>
						<text class="desc-list-item">新增四六级查询功能</text>
						<text class="desc-list-item">新增志愿者时长查询功能</text>
					</view>
				</view>
				 -->
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v0.0.6 内测版</text>
						<text class="desc-time">2019.08.17</text>
					</view>
					<text class="desc-content">开启内测</text>
				</view>
			</view>
		</view>
		<view class="footer-box">
			<view class="footer" style="padding-bottom: 30upx;">
				<view class="footer-lanshan">
					<text>Auther: 小猪</text>
				</view>
				<text>Copyright @ {{ year }} All Rights Reserved</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				showLog: false,
				version: Vue.version,
				year: new Date().getFullYear()
			}
		},
		methods: {
			toggleLog(){
				 this.showLog = !this.showLog
			}
		}
	}
</script>

<style>
	.container {
		background: #f4f4f4;
		padding: 0;
		font-size: 11pt;
		height: 100vh;
	}

	.header {
		position: relative;
		width: 100%;
		height: 400upx;
		text-align: center;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header .title {
		position: relative;
		width: 600upx;
		height: 200upx;
		z-index: 3;
		opacity: .95;
	}

	.black-cover {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #888;
		opacity: .18;
	}

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 750upx;
		border-radius: 10upx;
		margin-top: -175upx;
		filter: blur(15px);
	}

	.content {
		flex: 1;
	}

	.version {
		height: 100upx;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0 45upx;
		box-sizing: border-box;
		font-size: 13pt;
		color: #666;
		border-bottom: 1px #e5e5e5 solid;
	}

	.version-title {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.title-name {
		padding-right: 10upx;
	}

	.version-text {
		font-size: 10pt;
		line-height: 100%;
		color: #7acfa6;
		border: 1px solid #7acfa6;
		padding: 5upx 10upx;
		border-radius: 5upx;
		margin-left: 10upx;
		text-align: center;
	}

	.version-log-link {
		position: relative;
		font-size: 12pt;
		color: #7acfa6;
	}

	.version-log-link:active {
		opacity: .8;
	}

	.update-log::after {
		content: '';
		position: absolute;
		right: -3px;
		top: -1px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #e55c5c;
	}

	.log-list {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.describe {
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 45upx 30upx;
		display: flex;
		flex-flow: column nowrap;
		color: #545454;
		line-height: 175%;
		background: #fff;
		margin-top: 15upx;
		border-top: 1px #e5e5e5 solid;
		border-bottom: 1px #e5e5e5 solid;
	}

	.desc-title {
		display: flex;
		font-size: 13pt;
		line-height: 200%;
		margin-bottom: 15upx;
	}

	.desc-v {
		flex: 1;
	}

	.desc-time {
		font-size: 11pt;
		color: #888;
	}

	.desc-list {
		display: flex;
		flex-direction: column;
		border-left: 8upx solid #ddd;
		padding-left: 15upx;
		color: #777;
		margin-bottom: 15upx;
		font-size: 10pt;
	}

	.desc-content {
		padding-bottom: 15upx;
	}
	.footer-box{
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.footer {
		display: flex;
		flex-direction: column;
		font-size: 9pt;
		line-height: 150%;
		text-align: center;
		padding: 100upx 0 15upx;
		color: #c2c2c2;
	}

	.footer-lanshan {
		font-size: 10pt;
		height: 10pt;
		line-height: 10pt;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8upx;
	}

	.footer-lanshan image {
		width: 10pt;
		height: 10pt;
		margin-right: 5upx;
	}
</style>
