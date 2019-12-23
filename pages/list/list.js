// pages/listdemo/listdemo.js
let fieldDefine = [{
    field: "title",
    className: "col-7 bold ellipsis"
}, {
    field: "code",
    className: "col-3 align-right",
},
{
    field: "desc",
    className: "col-10"
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
]
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fieldDefine: fieldDefine,
        listDefine: [{
            type: "edit",
            text: "编辑",
            field: "id"
        },
        {
            type: "del",
            text: "删除",
            field: "id"
        }
        ],
        listData: [{
            id: "1",
            code: "a12354789",
            title: "应收应付对应付对账应收应付对应付对账",
            desc: "备注：华天酒店 应收科目、应收科目对账内容华天酒店 应收科目、应收科目对账内容",
            phone: "13782554866",
            createUser: "小王",
            ordertype: 1,
            user1: "小红",
            user2: "小刚",
            user3: "小李",
            user4: "张三",
            user5: "李四"
        }, {
            id: "3",
            code: "c748912441",
            title: "水镇望京楼精品酒店",
            desc: "水镇望京楼精品酒店应收科目、应收科目对账内容",
            phone: "15262554866",
            createUser: "小明",
            ordertype: 3,
            user1: "小红",
            user2: "小刚",
            user3: "小李",
            user4: "张三",
            user5: "李四"
        }],
        buttomDefine: [{
            type: "add",
            text: "新增",
            field: ""
        },{
            type: "add",
            text: "删除",
            field: ""
        },
        {
            type: "add",
            text: "记账",
            field: "id"
        }
        ],
        where: 'list'
    },
    check(e) {
        this.setData({
            where: e.currentTarget.dataset.check
        })
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