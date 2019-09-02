import {
	getStorage,
	getToday
} from '@/util'
import {
	getCourse,
	getWeekInfo
} from '@/api'

const state = {
	"isWeek": "",
	"weekly": "",
	"week": "",
	"courses":""
}

const mutations = {
	setIsWeek(state, isWeek) {
		state.isWeek = isWeek
	},
	setWeekly(state, weekly) {
		state.weekly = weekly
	},
	setWeek(state, week) {
		state.week = week
	},
	setCourses(state, courses) {
		state.courses = courses
	}
}

const actions = {
	getCourse({
		commit
	}, date) {		
		date = date ? date : getToday()
		getCourse(date).then(res => {
			var ret = res.data
			if (ret.status == 200) {
				commit('setCourses',ret.data)			
			}else{
				commit('setCourses',"")
			}
		})
	},
	getWeekInfo({
		commit
	}, date) {
		date = date ? date : getToday()
		getWeekInfo(date).then(res => {
			var ret = res.data
			if (ret.status == 200) {
				commit('setIsWeek',ret.data.isWeek)
				commit('setWeekly',ret.data.weekly)
				commit('setWeek',ret.data.weeks)
			}else{
				commit('setIsWeek',"")
				commit('setWeekly',"")
				commit('setWeek',"")
			}
		})
	}
}

export default {
	state,
	mutations,
	actions
}
