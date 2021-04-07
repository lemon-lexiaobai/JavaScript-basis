console.log('array join')

Array.prototype.join = function(separator = ','){
    if(this == undefined){
        throw new TypeError('this is null or undefined')
    }
    let res = ''
    for(let i = 0; i < this.length; i++){
        // 如果一个元素未undefined或null，他会被转换成空字符串
        res += `${separator}${this[i] ? this[i] : ''}`
    }
    // 只有一个项目，那么将返回该项目而不使用分隔符
    return res.slice(1)
}
let a = [1,2,3,,,4,5,6,,,7,8,9]
console.log(a.join('_'))
