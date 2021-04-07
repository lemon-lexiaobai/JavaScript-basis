Array.prototype.filter = function(callback, thisArg){
    if(this == undefined){
        throw new TypeError('this is null or not undefined')
    }

    if(typeof callback !== 'function'){
        throw new TypeError(callback + ' is not function')
    }

    const res = []
    for(let i = 0; i < this.length; i++){
        // 使用in是为了跳过数组的空位
        if(i in this){
            if(callback.call(thisArg, this[i], i, this)){
                res.push(this[i])
            }
        }
    }
    return res
}
let a = [1,2,3,,4,5,6,7]
console.log(a.filter(item => item > 3))
