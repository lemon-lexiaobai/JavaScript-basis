Array.prototype.reduce = function(callback, initialValue){
    if(this == undefined){
        throw new TypeError('this is null or undefined')
    }

    if(typeof callback !== 'function'){
        throw new TypeError(callback + ' is not a function')
    }

    /** 这个地方对第二个参数进行判断，但是判断的还不够
     *  没有判断数组第一个值为空值的情况
     */
    // if(!initialValue){
    //     initialValue = this[0]
    //     this.shift()
    // }
    // let res = initialValue
    //
    // for(let i = 0; i < this.length; i++){
    //     if(i in this){
    //         res = callback(res, this[i], i, this)
    //     }
    // }

    let k = 0
    const len = this.length

    // 在数组的第二个参数为undefined的情况下
    // 数组的第一个有效值作为累加器的初始值
    if(!initialValue){
        while(k < len && !(k in this)){
            k++
        }
        // 超出数组边界还未找到累加器的初始值，则TypeError
        if(k >= len){
            throw new TypeError('Reduce of empty array with no initial value')
        }
        initialValue = this[k++]
    }

    let res = initialValue

    while(k < len){
        if(k in this){
            res = callback.call(undefined, res, this[k], k, this)
        }
        k++
    }


    return res
}

let a = [1,2,3,4,,5,,6,7]
console.log(a.reduce((sum, i) => sum + i))
