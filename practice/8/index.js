let i
for(i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 0)
}
// 4, 4, 4

/**
 * 字符串，字母开头，后面字母数字下划线，长度6-30
 * */
const reg = /^[a-zA-Z]\w{5,29}$/

/**
 * 邮政编码： /\d{6}/
 * 小写英文字母： /^[a-z]+$/
 * 英文字母： /^[a-zA-A]+$/
 * 日期格式： /^\d{4}-\d{1,2}-\d{1,2}$/
 * 用户名： /^[a-zA-Z]\w{5-17}$/
 * IP地址： /\d+\.\d+\.\d+\.\d+/
 * */

let a = 100
function test(){
    console.log(a) // 100
    a = 10
    console.log(a) // 10
}
test()
console.log(a) // 10
