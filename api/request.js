import {
	addHeader,
	getStorage
} from '@/util'

const baseURL = "https://fjsdxy.yunserver.com/v1"

var Header = {
	"content-type": "application/x-www-form-urlencoded"
}

const loading = (isLoad = true) => {	
	if (isLoad == true) {
		uni.showLoading({
			title: '加载中'
		});
	} else {
		uni.hideLoading();
	}
}

var isMoal = true
const showMoal = () => {
	if (isMoal == true) {
		isMoal = false
		uni.showModal({
			title: '提示',
			content: '网络错误',
			showCancel:false,
			success: function(res) {
				if (res.confirm) {
					isMoal = true
				} else if (res.cancel) {
					isMoal = true
				}
			}
		});
	}
}

const get = (url, data = "", _header = {}) => {
	loading()
	Header = addHeader(Header, {
		"Authorization": getStorage('token')
	})	
	//console.log(Header);
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			data: data,
			header: addHeader(Header, _header),
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				showMoal()
				reject(err)
			},
			complete: () => {
				loading(false)
			}
		});
	})
}

const post = (url, data = "", _header = {}) => {
	loading()	
	Header = addHeader(Header, {
		"Authorization": getStorage('token')
	})
	//console.log(Header);
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			data: data,
			method: "POST",
			header: addHeader(Header, _header),
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				showMoal()
				reject(err)
			},
			complete: () => {
				loading(false)
			}
		});
	})
}

export default {
	baseURL,
	get,
	post
}
