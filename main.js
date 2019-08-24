import Vue from 'vue'
import App from './App'

import home from './pages/component/home/home.vue'
Vue.component('home', home)

import sources from './pages/component/source/source.vue'
Vue.component('sources', sources)

import student from './pages/component/student/student.vue'
Vue.component('student', student)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.version = 'v0.0.1' //版本号

Vue.config.productionTip = false

const app = new Vue({
	...App
})
app.$mount()
