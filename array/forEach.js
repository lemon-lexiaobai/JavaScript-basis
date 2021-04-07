Array.prototype.forEach = function(callback, thisArg){
    if(this == undefined){
        throw new TypeError('this is null or undefined')
    }

    if(typeof callback !== 'function'){
        throw new TypeError(callback + ' is not a function')
    }

    for(let i = 0; i < this.length; i++){
        if(i in this){
            callback.call(thisArg, this[i], i, this)
        }
    }
}

// 跳过空位
let a = [1,2,3,,,4,5,,null,,7,8,9]
a.forEach(item => {
    console.log(item)
})
