import Vue from 'vue'
import App from './App'
 
 import home from './pages/component/home/home.vue'
 Vue.component('home',home)
 
 import sources from './pages/component/source/source.vue'
 Vue.component('sources',sources)
 
 import student from './pages/component/student/student.vue'
 Vue.component('student',student)
 
 import cuCustom from './colorui/components/cu-custom.vue'
 Vue.component('cu-custom',cuCustom)
 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
}) 
app.$mount()
