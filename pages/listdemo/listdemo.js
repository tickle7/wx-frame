// pages/listdemo/listdemo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fieldDefine: [{
                field: "img",
                className: "col-2 list-img"
            }, {
                field: "title",
                className: "col-5 bold ellipsis"
            }, {
                field: "code",
                className: "col-3 align-right"
            },
            {
                field: "desc",
                className: "col-8"
            },
            {
                field: "createUser",
                className: "col-5"
            },
            {
                field: "phone",
                className: "col-5"
            },
            {
                field: "user1",
                className: "col-2 align-center"
            },
            {
                field: "user2",
                className: "col-2 align-center"
            },
            {
                field: "user3",
                className: "col-2 align-center"
            },
            {
                field: "user4",
                className: "col-2 align-center"
            },
            {
                field: "user5",
                className: "col-2 align-center"
            }
        ],
        buttomDefine: [{
                type: "edit",
                text: "编辑",
                field: "id"
            },
            {
                type: "del",
                text: "删除",
                field: "id"
            },
            {
                type: "commit",
                text: "记账",
                field: "id",
                isfixed: false,
                state: 1
            },
            {
                type: "commit",
                text: "反记",
                field: "id",
                isfixed: false,
                state: 2
            }
        ],
        listData: [{
            id: "1",
            code: "a12354789",
            title: "应收应付对应付对账应收应付对应付对账",
            desc: "备注：华天酒店 应收科目、应收科目对账内容华天酒店 应收科目、应收科目对账内容",
            phone: "13782554866",
            img: "../../image/yg.jpg",
            createUser: "小王",
            ordertype: 1,
            user1: "小红",
            user2: "小刚",
            user3: "小李",
            user4: "张三",
            user5: "李四"
        }, {
            id: "2",
            code: "q986371241",
            title: "水镇望京楼精品酒店",
            desc: "水镇望京楼精品酒店应收科目、应收科目对账内容",
            phone: "15262554866",
            createUser: "小李",
            ordertype: 2,
            img: "../../image/ys.jpg",
            user1: "11013903",
            user2: "小刚",
            user3: "小李",
            user4: "18976543214",
            user5: "李四"
        }, {
            id: "3",
            code: "c748912441",
            title: "水镇望京楼精品酒店",
            desc: "水镇望京楼精品酒店应收科目、应收科目对账内容",
            phone: "15262554866",
            createUser: "小明",
            img: "../../image/mj.jpg",
            ordertype: 3,
            user1: "小红",
            user2: "小刚",
            user3: "小李",
            user4: "张三",
            user5: "李四"
        }],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})