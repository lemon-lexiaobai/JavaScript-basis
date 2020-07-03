/**
 * trim删除字符串前后的空白字符串
 * */

// String.prototype.trim = function(){
//     return this.replace(/^\s+/,'').replace(/\s+$/,'')
// }

// 获取最大值
const max = function(){
    const nums = Array.prototype.slice.call(arguments)
    let max = 0
    nums.forEach(n=>{
        if(n > max){
            max = n
        }
    })
    return max
}
