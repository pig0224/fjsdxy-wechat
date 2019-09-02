<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">日常请假</view>
		</cu-custom>
		<view class="leave">
			<view class="flex flex-direction bg-white margin-top padding" v-for="(item,index) in list" :key="index">
				<view class="flex leave-li">
					<view class="leave-name">
						事由类型 :
					</view>
					<view class="leave-val">
						{{item.type}}
					</view>
				</view>
				<view class="flex leave-li">
					<view class="leave-name">
						请假时间 :
					</view>
					<view class="leave-val">
						{{item.date}}
					</view>
				</view>
				<view class="flex leave-li">
					<view class="leave-name">
						外出地点 :
					</view>
					<view class="leave-val">
						{{item.AreaWide}}
					</view>
				</view>
				<view class="flex leave-li">
					<view class="leave-name">
						请假状态 :
					</view>
					<view class="leave-val">
						{{item.status}}
					</view>
				</view>
				<view class="leave-revoke" v-if="item.status=='审批中'">
					<button class="cu-btn round bg-theme" style="color: #fff;" :data-id="item.id" @tap="revokeLeave">撤销</button>
				</view>
			</view>
		</view>
		<view style="height: 170upx;"></view>
		<view class="leave-btn">
			<navigator url="/pages/component/leave/apply" class="padding flex flex-direction" hover-class="hover-on">
				<button class="cu-btn bg-theme lg text-white">申请假条</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {
		getLeaveList,
		revokeLeave
	} from '@/api'
	import {
		showToast
	} from '@/util'
	export default {
		onShow() {
			this.getLeave()
		},		
		data() {
			return {				
				list: []
			}
		},
		methods: {
			getLeave(){
				return getLeaveList().then(res=>{
					var ret = res.data
					if(ret.status == 200){
						this.list = ret.data
					}
				})
			},
			revokeLeave(e){
				var id = e.currentTarget.dataset.id
				revokeLeave(id).then(res=>{
					var ret = res.data 
					if(ret.status == 200){
						this.getLeave()
						showToast({
							type:"success",
							msg:"撤销成功"
						})
						
					}else{
						this.getLeave()
						showToast({
							type:"success",
							msg:"撤销异常"
						})						
					}
				})
				
			}
		},
		async onPullDownRefresh() {
			await this.getLeave()
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
	.container {
		background: var(--ghostWhite);
		padding: 0;
		margin: 0;
		height: 100vh;
	}

	.leave-btn {
		position: fixed;
		width: 100%;
		height: 140upx;
		bottom: 0;
	}

	.leave-li {
		height: 80upx;
		line-height: 80upx;
	}

	.leave-li .leave-name {
		text-align: right;
		width: 40%;
	}

	.leave-li .leave-val {
		padding-left: 20upx;
		width: 160%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.leave-revoke{
		width: 300upx;
		margin: 0 auto;
		padding-top: 20upx;
	}
	.leave-revoke button{
		width: 100%;
	}
</style>
