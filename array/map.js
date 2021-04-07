Array.prototype.map = function(callback, thisArg){
    if(this == undefined){
        throw new TypeError('this is null or undefined')
    }

    if(typeof callback !== 'function'){
        throw new TypeError(callback + ' is not a function')
    }
    const res = []
    for(let i = 0; i < this.length; i++){
        // map方法遍历，会跳过空位
        if(i in this){
            res.push(callback.call(thisArg, this[i], i, this))
        }
    }

    return res
}

let a = [1,2,,3,,,5]
console.log(a.map(item => item + 2))
