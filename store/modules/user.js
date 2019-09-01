import {
	getStorage,
	setStorage,
	removeStorage,
	showToast
} from '@/util'

import {
	wxLogin,
	getUserInfo,
	getWxInfo
} from '@/api'


const state = {
	userInfo: {
		userId: getStorage('userId'),
		nickName: "",
		avator: "",
		isBind: false,
		token: getStorage('token')
	}
}

const mutations = {
	setUserId(state, userId) {
		if (userId == "") {
			removeStorage('userId')
		} else {
			setStorage('userId', userId)
		}
		state.userInfo.userId = userId
	},
	setAvator(state, avator) {
		state.userInfo.avator = avator
	},
	setNickName(state, nickName) {
		state.userInfo.nickName = nickName
	},
	setBind(state, isBind) {
		state.userInfo.isBind = isBind
	},
	setToken(state, token) {
		if (token == "") {
			removeStorage('token')
		} else {
			setStorage('token', token)
		}
		state.userInfo.token = token
	}
}

const actions = {
	wxLogin({
		dispatch,
		commit,
		state
	}) {
		return new Promise((resolve, reject) => {
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息
					wxLogin(loginRes.code).then(res => {
						if (res.data.status == 200) {
							commit('setToken', res.data.data.token)
							resolve()
						}
					})
				}
			});
		})
	},
	getUserInfo({
		dispatch,
		state,
		commit
	}) {
		getUserInfo().then(res => {			
			if (res.data.status == 200) {
				var isBind = res.data.data.student_info ? true : false;
				commit('setUserId', res.data.data.userId)
				commit('setAvator', res.data.data.avator)
				commit('setNickName', res.data.data.nickName)
				commit('setBind', isBind)				
			} else {
				commit('setUserId', "")
				commit('setAvator', "")
				commit('setNickName', "")
				commit('setToken', "")
				commit('setBind', false)	
				//dispatch('wxLogin')
			}
		})
	},
	getWxInfo({
		dispatch,
		state,
		commit
	}, {
		encryptedData,
		iv
	}) {
		getWxInfo({
			encryptedData,
			iv
		}).then(res => {
			var data = res.data
			dispatch('getUserInfo')
			this.dispatch('student/getStudentInfo')
			if (data.status == 200) {				
				showToast({
					type: 'success',
					msg: "登录成功"
				})
			} else {
				showToast({
					type: 'err',
					msg: "登录失败"
				})
			}
		})
	}
}

export default {
	state,
	mutations,
	actions
}
