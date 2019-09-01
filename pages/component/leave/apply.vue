<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">申请假条</view>
		</cu-custom>
		<form>
			
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-theme"></text> 请假时间
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">开始时间</view>
				<picker mode="date" :value="startDate" @change="startDateChange">
					<view class="picker">
						{{startDate}}
					</view>
				</picker>
				<picker @change="startTimeChange" :value="startIndex" :range="startTime">
					<view class="picker">
						{{startTime[startIndex]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">结束时间</view>
				<picker mode="date" :value="endDate" @change="endDateChange">
					<view class="picker">
						{{endDate}}
					</view>
				</picker>
				<picker @change="endTimeChange" :value="endIndex" :range="endTime">
					<view class="picker">
						{{endTime[endIndex]}}
					</view>
				</picker>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-theme"></text> 请假信息
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">请假类型</view>
				<picker @change="leaveTypeChange" :value="leaveTypeIndex" :range="leaveType">
					<view class="picker">
						{{leaveType[leaveTypeIndex]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">联系电话</view>
				<input placeholder="请输入您的电话" v-model="StuMoveTel" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">外出地点</view>
				
				<input placeholder="如:三明市尤溪县" v-model="OutAddress" name="input"></input>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-model="LeaveThing" placeholder="请输入请假事由"></textarea>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-theme"></text> 地域范围
				</view>
			</view>
			<radio-group class="block" @change="AreaWideChange">
				<view class="cu-form-group">
					<view class="title">永安</view>
					<radio :class="AreaWide=='永安'?'checked':''" :checked="AreaWide=='永安'?true:false" value="永安"></radio>
				</view>
				<view class="cu-form-group">
					<view class="title">外地</view>
					<radio :class="AreaWide=='外地'?'checked':''" :checked="AreaWide=='外地'?true:false" value="外地"></radio>
				</view>
			</radio-group>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-theme"></text> 外出联系人
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="请输入联系人姓名" v-model="OutName" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">电话</view>
				<input placeholder="请输入联系人电话" v-model="OutMoveTel" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">与本人关系</view>
				<input placeholder="如 : 女朋友" v-model="Relation" name="input"></input>
			</view>
			<view style="height: 170upx;"></view>
			<view class="leave-btn">
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-theme lg text-white" @tap="apply">提交申请</button>
				</view>
			</view>		
		</form>
	</view>
</template>

<script>
	import {isPhone,isBeforeDate} from '@/util'
	import {applyLeave} from '@/api'
	export default {
		data() {
			return {
				startDate: "请选择",
				startIndex: 0,
				startTime: ["00点", "01点", "02点", "03点", "04点", "05点", "06点", "07点", "08点", "09点", "10点", "11点", "12点", "13点", "14点",
					"15点", "16点", "17点", "18点", "19点", "20点", "21点", "22点", "23点"
				],
				endDate: "请选择",
				endIndex: 0,
				endTime: ["00点", "01点", "02点", "03点", "04点", "05点", "06点", "07点", "08点", "09点", "10点", "11点", "12点", "13点", "14点",
					"15点", "16点", "17点", "18点", "19点", "20点", "21点", "22点", "23点"
				],
				leaveTypeIndex: 0,
				leaveType: ["事假","病假","求职","实习","返家","培训","课假","其他"],
				AreaWide:"永安",
				OutAddress:"",
				OutMoveTel:"",
				Relation:"",
				OutName:"",
				StuMoveTel:"",
				LeaveThing:""
			}
		},
		methods: {
			startDateChange(e) {
				this.startDate = e.detail.value
			},
			startTimeChange(e) {
				this.startIndex = e.detail.value
			},
			endDateChange(e) {
				this.endDate = e.detail.value
			},
			endTimeChange(e) {
				this.endIndex = e.detail.value
			},
			leaveTypeChange(e){
				this.leaveTypeIndex = e.detail.value
			},
			AreaWideChange(e){
				this.AreaWide = e.detail.value
			},
			apply(){
				var LeaveBeginDate = this.startDate
				var LeaveBeginTime = this.startTime[this.startIndex]
				LeaveBeginTime = LeaveBeginTime.substring(0, 2)
				var LeaveEndDate = this.endDate
				var LeaveEndTime = this.endTime[this.endIndex]
				LeaveEndTime = LeaveEndTime.substring(0, 2)
				var LeaveType = this.leaveType[this.leaveTypeIndex]
				var OutAddress = this.OutAddress
				var AreaWide = this.AreaWide
				var OutMoveTel = this.OutMoveTel
				var Relation = this.Relation
				var OutName = this.OutName
				var StuMoveTel = this.StuMoveTel
				var LeaveThing = this.LeaveThing	
				if(LeaveBeginDate=="请选择"||!LeaveBeginTime){
					uni.showModal({
						title: '提示',
						content: '请选择开始时间',
						showCancel:false
					});
					return false;
				}
				if(LeaveEndDate=="请选择"||!LeaveEndTime){
					uni.showModal({
						title: '提示',
						content: '请选择结束时间',
						showCancel:false
					});
					return false;
				}
				if(!OutAddress){
					uni.showModal({
						title: '提示',
						content: '请填写外出地点',
						showCancel:false
					});
					return false;
				}
				if(!OutMoveTel||!isPhone(OutMoveTel)){
					uni.showModal({
						title: '提示',
						content: '请填写正确的联系人电话',
						showCancel:false
					});
					return false;
				}
				if(!Relation){
					uni.showModal({
						title: '提示',
						content: '请填写联系人关系',
						showCancel:false
					});
					return false;
				}
				if(!OutName){
					uni.showModal({
						title: '提示',
						content: '请填写联系人姓名',
						showCancel:false
					});
					return false;
				}
				if(!StuMoveTel||!isPhone(StuMoveTel)){
					uni.showModal({
						title: '提示',
						content: '请填写正确的本人电话',
						showCancel:false
					});
					return false;
				}
				if(!LeaveThing){
					uni.showModal({
						title: '提示',
						content: '请填写请假事由',
						showCancel:false
					});
					return false;
				}
				//开始时间小于结束时间
				if(isBeforeDate(LeaveBeginDate,LeaveEndDate)){
					if(LeaveEndTime<=LeaveBeginTime){						
						uni.showModal({
							title: '提示',
							content: '开始时间必须小于结束时间',
							showCancel:false
						});
						return false;
					}
				}else{
					uni.showModal({
						title: '提示',
						content: '开始时间必须小于结束时间',
						showCancel:false
					});
					return false;
				}
				applyLeave({
					LeaveBeginDate:LeaveBeginDate,
					LeaveBeginTime:LeaveBeginTime,
					LeaveEndDate:LeaveEndDate,
					LeaveEndTime:LeaveEndTime,
					LeaveType:LeaveType,
					OutAddress:OutAddress,
					AreaWide:AreaWide,
					OutMoveTel:OutMoveTel,
					Relation:Relation,
					OutName:OutName,
					StuMoveTel:StuMoveTel,
					LeaveThing:LeaveThing
				}).then(res=>{
					var ret = res.data 
					if(ret.status == 200){
						uni.showModal({
							title: '提示',
							content: '提交成功',
							showCancel:false,
							success: function(res) {
								if (res.confirm) {
									uni.navigateBack({
									    delta: 1
									});
								}
							}
						});
					}else{
						uni.showModal({
							title: '提示',
							content: '提交失败',
							showCancel:false
						});
					}
				})				
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 0;
		margin: 0;
		height: 100vh;
	}
	.leave-btn {
		position: fixed;
		width: 100%;
		height: 140upx;
		bottom: 0;
		z-index: 99;
	}
</style>
