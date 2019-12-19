const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const getIndex = function (arr, str) {
    let index = null;
    let val = str.split('.')[0];
    arr.every(function (value, i) {
        for (let key in value) {
            if (val === value[key]) {
                index = i;
                return false;
            }
        }
        return true;
    });
    return index;
}

/* 成功icon提示 */
function promptSuccess(str) {
    wx.showToast({
        title: str,
        icon: "success",
        duration: 2000
    })
}
/* icon undefined */
function noIcon(str) {
    wx.showToast({
        title: str,
        icon: "none",
        duration: 2000
    })
}
/* 失败icon */
function promptError(str) {
    wx.showToast({
        title: str,
        image: '../../image/error.png',
        duration: 2000
    })
}

module.exports = {
    formatTime,
    getIndex,
    promptSuccess,
    noIcon,
    promptError
}