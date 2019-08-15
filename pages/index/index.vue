<template>
	<view>
		<view v-if="PageCur=='index'">			
			<home></home>
		</view>
		<view v-if="PageCur=='kcb'">
			<cu-custom>
				<block slot="content">
					<view class='logo-image'>
						<image src="/static/logo.png"></image>
					</view>
				</block>
			</cu-custom>
			<source></source>
		</view>
		<view v-if="PageCur=='student'">
			<cu-custom bgColor="bg-black"></cu-custom>
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
	export default {
		data() {
			return {
				PageCur: 'index',
				fabuDelay: false
			}
		},
		onLoad() {
			this.changeOpt()
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				this.changeOpt()
			},
			changeOpt: function() {

			}
		}
	}
</script>
