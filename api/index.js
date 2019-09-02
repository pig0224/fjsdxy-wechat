import request from './request'

export const getToday = () => {
	return request.get('/week/get_today')
}

export const getUserInfo = () => {
	return request.get('/user/getInfo')
}

export const wxLogin = (code) => {
	return request.post('/wechat/login', {
		"code": code
	})
}

export const getWxInfo = ({
	encryptedData,
	iv
}) => {
	return request.post('/wechat/getInfo', {
		encryptedData,
		iv
	})
}

export const qqLogin = (code) => {
	return request.post('/qq/login', {
		"code": code
	})
}

export const getQQInfo = ({
	encryptedData,
	iv
}) => {
	return request.post('/qq/getInfo', {
		encryptedData,
		iv
	})
}

export const Bind = (data) => {
	return request.post('/student/bind',data)
}

export const unBind = () => {
	return request.post('/student/unBind')
}

export const getStudentInfo = () => {
	return request.get('/student/getInfo')
}

export const getNextClass = () => {
	return request.get('/course/get_next')
}

export const getCourse = (date) => {
	var getCourseUrl = "/course/get/" + date
	return request.get(getCourseUrl)
}

export const getWeekInfo = (date) => {
	var getWeekUrl = "/week/get_week_info/" + date
	return request.get(getWeekUrl)
}

export const pullExam = () =>{
	return request.get('/exam/pull')
}

export const getExam = () =>{
	return request.get('/exam/get')
}

export const getEcardAccount = () =>{
	return request.get('/ecard/get')
}

export const getLeaveList = () =>{
	return request.get('/leave/get_list')
}

export const revokeLeave = (Id) =>{
	var revokeLeaveUrl = "/leave/revoke/" + Id
	return request.get(revokeLeaveUrl)
}

export const applyLeave = (data) => {
	return request.post('/leave/apply', data)
}