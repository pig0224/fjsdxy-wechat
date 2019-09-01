<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">考试成绩</view>
		</cu-custom>
		<view class="exam-th">
			<view class="exam-th-li" style="width: 140%;">
				课程
			</view>
			<view class="exam-th-li" style="width: 90%;">
				类型
			</view>
			<view class="exam-th-li" style="width: 85%;">
				学分
			</view>
			<view class="exam-th-li" style="width: 85%;">
				成绩
			</view>
		</view>
		<view class="exam-tb">
			<view class="exam-th-item solid-bottom" v-for="(item,index) in exams" :key="index">
				<view class="exam-th">
					<view class="exam-th-li" style="width: 140%;">
						{{item.name}}
					</view>
					<view class="exam-th-li" style="width: 90%;">
						{{item.type}}
					</view>
					<view class="exam-th-li" style="width: 85%;">
						{{item.credits}}
					</view>
					<view class="exam-th-li" style="width: 85%;">
						{{item.score}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		pullExam,
		getExam
	} from '@/api'

	export default {
		created() {
			this.getExam()
		},
		data() {
			return {
				exams: ""
			}
		},
		methods: {
			getExam() {
				return pullExam().then(res => {
					var ret = res.data
					if (ret.status == 200) {
						getExam().then(res => {
							var ret = res.data
							if (ret.status == 200) {
								this.exams = ret.data
								//console.log(this.exams);
							}
						})
					} else {
						uni.showModal({
							title: '提示',
							content: '无成绩数据',
							showCancel: false,
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
		},
		async onPullDownRefresh() {
			await this.getExam()
			uni.stopPullDownRefresh();
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

	.exam-th {
		display: flex;
	}

	.exam-th .exam-th-li {
		height: 80upx;
		background: var(--ghostWhite);
		text-align: center;
		color: #666666;
		line-height: 80upx;
	}

	.exam-tb {
		display: flex;
		flex-direction: column;
	}

	.exam-tb .exam-th-item {
		width: 100%;
		height: 80upx;
	}

	.exam-tb .exam-th-item .exam-th .exam-th-li {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: #fff !important;
	}
</style>
