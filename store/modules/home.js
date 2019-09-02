import {
	getStorage,
	setStorage,
	showToast
} from '@/util'
import {
	getToday,
	getNextClass
} from '@/api'

const state = {
	week: "",
	today: "",
	next: ""
}

const mutations = {
	setWeek(state, week) {
		state.week = week
	},
	setToday(state, today) {
		state.today = today
	},
	setNext(state, next) {
		state.next = next
	}
}

const actions = {
	getToday({
		commit
	}) {
		getToday().then(res => {
			if (res.data.status == 200) {
				commit('setWeek',res.data.data.week)
				commit('setToday',res.data.data.today)
			}else{
				commit('setWeek',"")
				commit('setToday',"")
			}
		})
	},
	getNextClass({
		commit
	}) {
		
		getNextClass().then(res => {
			var ret = res.data					
			if(ret.status == 200){
				commit('setNext',ret.data)
			}else{
				commit('setNext',"")
			}
		})
	}
}

export default {
	state,
	mutations,
	actions
}
