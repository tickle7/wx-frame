//app.js
require('./page-extens')
App({
    onLaunch: function() {
      
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        //pageTarget: true,//用以判断是否是从详情页回来
        localtionNum: 0, //用以判断用户是否是第一次获取地位
        scrolltolower: true,
        scrolltoupper: true,
        islogin:false,
    }
})