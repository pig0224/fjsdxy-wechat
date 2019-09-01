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
	    }else{
			return ""
		}
	} catch (e) {
	    return ""
	}
}

export const removeStorage = (key) => {
	uni.removeStorageSync(key);
}

export const showToast = ({ type, msg}) => {
	var image = '/static/suc.png'
	switch (type){
		case 'error':	
			image = '/static/err.png'
			break;
		case 'success':
			image = '/static/suc.png'
			break;
	}
	uni.showToast({
	    title: msg,
		image:image,
	    duration: 2000
	});
}

export const getToday = () =>{
	var today = new Date();
	today.setTime(today.getTime());
	var year = today.getFullYear()
	var month = (today.getMonth()+1)
	var day = today.getDate()
	if (month < 10) {
		month = "0" + month
	}
	if (day < 10) {
		day = "0" + day
	}
	var date = year + "-" + month +"-" + day
	return date
}