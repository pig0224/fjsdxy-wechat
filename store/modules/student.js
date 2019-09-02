import {
	getStorage,
	setStorage,
	showToast
} from '@/util'
import {
	Bind,
	unBind,
	getStudentInfo
} from '@/api'

const state = {
	studentInfo: {
		name: "",
		className: "",
		college: "",
		major: ""
	}
}

const mutations = {
	setName(state, name) {
		state.studentInfo.name = name
	},
	setClassName(state, className) {
		state.studentInfo.className = className
	},
	setCollege(state, college) {
		state.studentInfo.college = college
	},
	setMajor(state, major) {
		state.studentInfo.major = major
	}
}

const actions = {
	Bind({
		dispatch,
		state,
		commit
	}, data) {
		Bind(data).then(res=>{
			var ret = res.data;
			if(ret.status == 200){
				dispatch('getStudentInfo')
				this.dispatch('user/getUserInfo')
				this.dispatch('home/getNextClass')
				this.dispatch('source/getCourse')
				this.dispatch('source/getWeekInfo')
				uni.showModal({
					title: '提示',
					content: '绑定成功',
					showCancel:false,
					success() {
						uni.navigateBack({
						    delta: 1
						});
					}
				});
			}else{
				uni.showModal({ 
					title: '提示',
					content: '默认密码为身份证后6位',
					showCancel:false
				});
			}
		})
	},
	unBind({	
		dispatch,
		state,
		commit
	}, data) {
		unBind().then(res=>{
			var ret = res.data;
			if(ret.status == 200){
				dispatch('getStudentInfo')
				this.dispatch('user/getUserInfo')
				showToast({
					type:'success',
					msg:'解绑成功'
				})
				
			}else{
				showToast({
					type:'error',
					msg:'解绑异常'
				})
			}
		})
	},
	getStudentInfo({
		state,
		commit
	}) {
		getStudentInfo().then(res => {
			if (res.data.status == 200) {							
				commit('setName', res.data.data.studentName)
				commit('setClassName', res.data.data.className)
				commit('setCollege', res.data.data.college)
				commit('setMajor', res.data.data.major)
			} else {
				commit('setName', "")
				commit('setClassName', "")
				commit('setCollege', "")
				commit('setMajor', "")
			}
		})
	}
}

export default {
	state,
	mutations,
	actions
}
