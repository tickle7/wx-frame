
const commonUrl = "http://10.13.10.108:9000/sj/"  //公共路径

// post请求封装
function postRequest(url, data) {
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        wx.request({
            url: commonUrl + url,
            data: postData,
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                if (res.statusCode == 200 && res.data.code == 0) {
                    resolve(res.data);
                } else {
                    // 请求服务器成功，但是由于服务器没有数据返回，
                    resolve(res.data.message);
                }
            },
            error: function (e) {
                reject('网络出错');
            }
        })
    });
    return promise;
}

// get请求封装
function getReques(url, data) {
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        wx.request({
            url: commonUrl + url,
            data: postData,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                if (res.statusCode == 200 && res.data.code == 0) {
                    resolve(res.data);
                } else {
                    // 请求服务器成功，但是由于服务器没有数据返回，
                    resolve(res.data.message);
                }
            },
            error: function (e) {
                reject('网络出错');
            }
        })
    });
    return promise;
}


module.exports = {
    postRequest,
    getReques
}