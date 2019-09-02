export const addHeader = (header, _header) => {
	for (let key in _header) {
		header[key] = _header[key]
	}
	return header
}

export const setStorage = (key, data) => {
	uni.setStorageSync(key, data);
}

export const getStorage = (key) => {
	try {
		const value = uni.getStorageSync(key);
		if (value) {
			return value
		} else {
			return ""
		}
	} catch (e) {
		return ""
	}
}

export const removeStorage = (key) => {
	uni.removeStorageSync(key);
}

export const showToast = ({
	type,
	msg
}) => {
	var image = '/static/suc.png'
	switch (type) {
		case 'error':
			image = '/static/err.png'
			break;
		case 'success':
			image = '/static/suc.png'
			break;
	}
	setTimeout(function(){
		uni.showToast({
			title: msg,
			image: image,
			duration: 2000
		});
	},500)	
}

export const getToday = () => {
	var today = new Date();
	today.setTime(today.getTime());
	var year = today.getFullYear()
	var month = (today.getMonth() + 1)
	var day = today.getDate()
	if (month < 10) {
		month = "0" + month
	}
	if (day < 10) {
		day = "0" + day
	}
	var date = year + "-" + month + "-" + day
	return date
}

export const isPhone = (num) => {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(num)) {
		return false;
	} else {
		return true;
	}
}

export const isBeforeDate = (startDate, endDate) =>{
	var sYear = startDate.substring(0,4)
	var sMonth = startDate.substring(5,2)
	var sDay = startDate.substring(8,2)
	
	var eYear = endDate.substring(0,4)
	var eMonth = endDate.substring(5,2)
	var eDay = endDate.substring(8,2)
	
	if(sYear>eYear){
		return false
	}
	if(sYear<eYear){
		return true
	}
	if(sMonth>eMonth){
		return false
	}
	if(sMonth<eMonth){
		return true
	}
	if(sDay>eDay){
		return false
	}
	if(sDay<eDay){
		return true
	}
	return true
}
