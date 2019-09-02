<template>
	<scroll-view scroll-y class="scrollPage">
		<view v-if="userInfo.userId">
			<view class="UCenter-bg">
				<image :src="userInfo.avator" class="round" mode="widthFix"></image>
				<view class="margin-top-sm">
					<text class="text-xl">{{userInfo.nickName}}</text>
				</view>
				<image src="https://fjsdxy.yunserver.com/static/img/wave.gif" mode="scaleToFill" class="gif-wave"></image>
			</view>
		</view>
		<view v-else>
			<view class="UCenter-bg" @click="LoginMoal">
				<image src="https://fjsdxy.yunserver.com/static/img/avator.jpg" class="round" mode="widthFix"></image>
				<view class="margin-top-sm">
					<text class="text-xl">未登录</text>
				</view>
				<image src="https://fjsdxy.yunserver.com/static/img/wave.gif" mode="scaleToFill" class="gif-wave"></image>
			</view>
		</view>

		<view class="padding flex text-center text-grey bg-white shadow-warp" :class="(userInfo.userId&&userInfo.isBind)?'':'display-none'">
			<view class="flex flex-sub flex-direction solid-right align-center">
				<view class="margin-bottom-sm">专业</view>
				<view class="text-xl text-orange text-cut" style="max-width: 200upx;">{{studentInfo.major}}</view>
			</view>
			<view class="flex flex-sub flex-direction solid-right align-center">
				<view class="margin-bottom-sm">姓名</view>
				<view class="text-xl text-blue text-cut" style="max-width: 200upx;">{{studentInfo.name}}</view>
			</view>
			<view class="flex flex-sub flex-direction align-center">
				<view class="margin-bottom-sm">班级</view>
				<view class="text-xl text-green text-cut" style="max-width: 200upx;">{{studentInfo.className}}</view>
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
				<view v-if="userInfo.userId&&userInfo.isBind" class="content" @tap="unBind">
					<text class="cuIcon-newsfill text-theme"></text>
					<text class="text-grey">解绑学号</text>
				</view>
				<navigator v-else-if="userInfo.userId&&!userInfo.isBind" class="content" url="/pages/component/bind/bind"
				 hover-class="none">
					<text class="cuIcon-newsfill text-theme"></text>
					<text class="text-grey">绑定学号</text>
				</navigator>
				<view v-else class="content" @tap="LoginMoal">
					<text class="cuIcon-people text-theme"></text>
					<text class="text-grey">微信快捷登录</text>
				</view>
			</view>
		</view>
		<!-- <view class="login-moal" :class="showlogin?'':'display-none'" @click="LoginMoal()">
			<view class="login-moal-box">
				<view class="login-moal-from">
					<view class="login-moal-content">
						<button open-type="getUserInfo" class="cu-btn lg bg-theme"><text class="text-white">微信一键登录</text></button>
					</view>
				</view>
			</view>
		</view> -->
		<view class="cu-modal" :class="showlogin?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">登录</view>
					<view class="action" @tap="LoginMoal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<button open-type="getUserInfo" @getuserinfo="login" class="cu-btn lg bg-theme"><text class="text-white">微信一键登录</text></button>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</scroll-view>
</template>

<script>
	import {
		showToast,
		getStorage
	} from '@/util'
	import {
		mapState
	} from 'vuex'
	import store from '@/store'

	export default {
		computed: {
			...mapState('user', ['userInfo']),
			...mapState('student', ['studentInfo'])
		},
		data() {
			return {
				user: {},
				showlogin: false
			}
		},
		methods: {
			showQrcode() {
				uni.previewImage({
					urls: ['https://fjsdxy.yunserver.com/static/img/zanCode.jpg'],
					current: 'https://fjsdxy.yunserver.com/static/img/zanCode.jpg' // 当前显示图片的http链接    
				})
			},
			LoginMoal() {
				this.showlogin = !this.showlogin
			},
			login(res) {
				this.showlogin = false
				var userInfo = res.detail
				uni.checkSession({
					async success() {
						//token不存在重新获取						
						if (!getStorage('token')) {
							await store.dispatch('user/wxLogin');
							//重新获取用户信息							
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {									
									store.dispatch('user/getWxInfo', {
										encryptedData: infoRes.encryptedData,
										iv: infoRes.iv
									})
								}
							});							
						} else {
							store.dispatch('user/getWxInfo', {
								encryptedData: userInfo.encryptedData,
								iv: userInfo.iv
							})
						}
					},
					async fail() {
						await store.dispatch('user/wxLogin');
						//重新获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {									
								store.dispatch('user/getWxInfo', {
									encryptedData: infoRes.encryptedData,
									iv: infoRes.iv
								})
							}
						});	
					}
				})
			},
			unBind() {
				store.dispatch('student/unBind')
			}
		}
	}
</script>

<style scoped>
	.scrollPage {
		height: 100vh;
	}

	.UCenter-bg {
		background-image: url(https://fjsdxy.yunserver.com/static/img/student_bg.jpg);
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

	.login-moal {
		position: fixed;
		background: rgba(0, 0, 0, 0.1);
		top: 0px;
		left: 0px;
		right: 0px;
		height: 100vh;
	}

	.login-moal .login-moal-box {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.login-moal .login-moal-box .login-moal-from {
		height: 400upx;
		width: 600upx;
		border-radius: 40upx;
		background: #fff;
	}
</style>
