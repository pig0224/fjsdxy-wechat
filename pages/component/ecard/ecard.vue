<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">一卡通</view>
		</cu-custom>
		<view class="ecard bg-gradual-theme shadow-warp">
			<view class="ecard-box">
				<view class="padding">卡号 : {{account.code}}</view>
				<view class="padding">余额 : {{account.money}}</view>
				<view class="padding">今日消费 : {{account.consume}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getEcardAccount
	} from '@/api'
	export default {
		created() {
			this.getAccount()
		},
		data() {
			return {
				account:{
					code:"获取中...",
					money:"获取中...",
					consume:"获取中..."
				}
			}
		},
		methods: {
			getAccount(){
				getEcardAccount().then(res => {
					var ret = res.data
					if(ret.status==200){
						this.account = ret.data
					}else{
						uni.showModal({
							title: '提示',
							content: '无一卡通数据',
							showCancel:false,
							success: function(res) {
								if (res.confirm) {
									uni.navigateBack({
									    delta: 1
									});
								}
							}
						});
					}
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		background: #fff;
		padding: 0;
		margin: 0;
		height: 100vh;
	}
	.ecard{
		width: 700upx;
		position: relative;
		top: 100upx;
		margin: 0 auto;
		border-radius: 20upx;
		padding-left: 50upx;		
		padding-top: 10upx;
		padding-bottom: 10upx;
	}
	.ecard .ecard-box{
		height: 100%;
		width: 100%;		
		font-weight: bold;
		font-size: 28upx;
	}
</style>
