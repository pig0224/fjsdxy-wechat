import Vue from 'vue'
import Vuex from 'vuex'

import student from './modules/student'
import user from './modules/user'
import home from './modules/home'
import source from './modules/source'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		student: {
			namespaced: true,
			...student
		},
		user: {
			namespaced: true,
			...user
		},
		home: {
			namespaced: true,
			...home
		},
		source: {
			namespaced: true,
			...source
		}
	}
})

export default store
