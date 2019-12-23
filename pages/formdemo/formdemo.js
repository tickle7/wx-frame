Page({

    /**
     * 页面的初始数据
     */
    data: {

        fields: [{
                field: "code",
                type: "input",
                className: "",
                displayName: "code：",
                placeholder: ""
            },
            {
                field: "name",
                type: "input",
                displayName: "姓名：",
                placeholder: "请输入姓名"
            },
            {
                field: "birthday",
                type: "date",
                displayName: "生日：",
                placeholder: "请选择生日"
            },
            {
                field: "sex",
                type: "radio",
                displayName: "性别：",
                placeholder: ""
            },
            {
                field: "address",
                type: "textarea",
                displayName: "详细地址",
                placeholder: "请填写详细地址"
            },
            {
                field: "introduction",
                type: "textarea",
                displayName: "个人简介",
                placeholder: "请填写简介"
            }
        ],
        buttons: [{
                type: "submit",
                text: "提交"
            },
            {
                type: "add",
                text: "新增"
            },
            {
                type: "del",
                text: "删除"
            }
        ],
        formdata: {
            code: "12354",
            name: "小明",
            birthday: "1993-02-23",
            sex: "1.男",
            introduction: "小明的简介",
            address: "小明的详细地址",
        },
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // wx.navigateTo({
        //     url:'../listdemo/listdemo?id=1&page=4'
        // })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})