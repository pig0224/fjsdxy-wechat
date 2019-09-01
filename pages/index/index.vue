<template>
	<view>
		<view v-if="PageCur=='index'">			
			<home></home>
		</view>
		<view v-if="PageCur=='kcb'">			
			<sources></sources>
		</view>
		<view v-if="PageCur=='student'">
			<student></student>
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="index">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/index' + [PageCur=='index'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='index'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="kcb">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/kcb' + [PageCur == 'kcb'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='kcb'?'text-green':'text-gray'">课表</view>
			</view>
			<view class="action" @click="NavChange" data-cur="student">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/student' + [PageCur == 'student'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='student'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import store from '@/store'
	
	export default {
		data() {
			return {
				PageCur: 'index'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				this.getInfo()
			},
			getInfo() {
				if (store.state.user.userInfo.userId) {
					store.dispatch('user/getUserInfo')
					if (store.state.user.userInfo.isBind) {
						store.dispatch('student/getStudentInfo')
					}
				}
			}
		}
	}
</script>
