/**
 *
 * Page扩展函数
 *
 * @param {*} Page 原生Page
*/
const event = require("./utils/event.js")
const util = require("./utils/util.js")
const pageExtens = Page => {
    return object => {
        // 导出原生Page传入的object参数中的生命周期函数
        // // 由于命名冲突，所以将onLoad生命周期函数命名成了onLoaded
        // const { onLoaded } = object

        // // 公共的onLoad生命周期函数
        // object.onLoad = function (options) {
        //     // 在onLoad中执行的代码
        //     this.setData({
        //         textarea: ""
        //     })
        //     // 执行onLoaded生命周期函数
        //     if (typeof onLoaded === 'function') {
        //         onLoaded.call(this, options)
        //     }
        // }
        // 公共formlist事件
        object.edit = function (e) {
            event.clickFun({
                entity:"",
                e:e
            }).then(data => {
                util.promptError(data)
            });
        }
        object.del = function (e) {
            event.clickFun({
                entity: "DeleteByID/acuser",
                e: e
            }).then(data => {
                util.promptError(data)
            });
        }
        // 公共formfree事件
        object.formSubmit = function (e) {
            console.log(`form发生了${e.detail.target.dataset.type}事件，携带数据为：`, e.detail)
        }
        object.bindPickerChange = function(e) {
            var formdata = this.data.formdata;
            var field = `formdata.${e.currentTarget.dataset.field}`
            this.setData({
                [field]: e.detail.value
            })
        }
        object.btptextarea = function (e) {
            var target = e.currentTarget.dataset.target;
            this.setData({
                textarea: target
            })
            console.log(this.data.textarea)
        }
        object.blurtextarea = function (e) {
            var target = e.currentTarget.dataset.target;
            target = `formdata.${target}`
            this.setData({
                [target]: e.detail.value,
                textarea: ""
            })
            console.log(target)
            console.log(this.data.formdata)
        }
        return Page(object)
    }
}

// 获取原生Page
const originalPage = Page
// 定义一个新的Page，将原生Page传入Page扩展函数
Page = pageExtens(originalPage)
