<script>
	import Vue from 'vue'

	export default {
		created() {
			this.getInfo()
		},
		methods: {
			getInfo() {
				if (this.$store.state.user.userInfo.userId) {
					this.$store.dispatch('user/getUserInfo')
					if (this.$store.state.user.userInfo.isBind) {
						store.dispatch('student/getStudentInfo')
					}
				}
			}
		},
		onLaunch: function() {
			//console.log('App Launch')					
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let customWx = wx.getMenuButtonBoundingClientRect();
					if (!customWx.bottom) {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.Custom = customWx;
						Vue.prototype.CustomBar = customWx.bottom + customWx.top - e.statusBarHeight;						
					}
					// #endif		
					// #ifdef MP-QQ	
					Vue.prototype.StatusBar = e.statusBarHeight;
					let customQQ = qq.getMenuButtonBoundingClientRect();					
					if (!customQQ.bottom) {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;						
					} else {
						Vue.prototype.Custom = customQQ;
						Vue.prototype.CustomBar = customQQ.bottom + customQQ.top - e.statusBarHeight;
					}
					// #endif	
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif					
				}
			})
			uni.showShareMenu()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "common/style/app.css";
</style>
