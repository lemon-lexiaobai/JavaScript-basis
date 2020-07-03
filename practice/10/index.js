/**
 * 异常捕获
 * try catch
 * 自动捕获： window.onerror
 * */

/**
 * JSON
 * json是一种数据格式，本质是一段字符串
 * json格式和JS结构对象一致，对JS语言更友好
 *
 * window.JSON是一个全局对象：
 * JSON.stringify: 对象转换成字符串
 * JSON.parse： 字符串转换成对象
 *
 * JSON的key和value都需要用双引号引起来
 * */

/**
 * 获取当前页面url参数
 *
 * location.search
 * URLSearchParams 考虑浏览器兼容的问题
 * */

/**
 * new RegExp('^abc$') === /^abc$/
 * */

// 传统方式
// function query(name){
//     const search = location.search.substr(1) // 类似 array.slice(1)
//     const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
//     const res = search.match(reg)
//     if(res === null){
//         return null
//     }
//     return res[2]
// }
// query('d')

// URLSearchParams
function query(name){
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
console.log(query('b'))
