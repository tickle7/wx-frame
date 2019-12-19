var config = require('./config.js')

var clickFun = function(o) {
    console.log(o)
    let { entity,e} = o;
    var field = e.currentTarget.dataset.target;
    var parm = e.currentTarget.dataset.parm;
    for (let key in parm) {
        if (key == field) {
            return config.postRequest(entity, `{${field}:${parm[key]}}`);
        }
    }
}
module.exports = {
    clickFun
}