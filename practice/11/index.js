/**
 * 将URL参数解析为JS对象
 * */

function queryToObject() {
    const res = {}
    const search = location.search.substr(1)
    search.split('&').forEach(paramStr => {
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}
console.log(queryToObject())

/**
 * 数组拍平
 * */

function flat(arr){
    // 验证arr中，还有没有深层数组 [1,2,[3,4]]
    const isDeep = arr.some(item=>item instanceof Array)
    if(!isDeep){
        return arr
    }
    const res =Array.prototype.concat.apply([], arr)
    return flat(res) // 递归
}

const res = flat([1,2,[3,4,[5,6,[7,8,[9,10]]]],11])
console.log(res)

/**
 * 数组去重
 * */

// 常用方式
// function unique(arr){
//     const res = []
//
//     arr.forEach(item=>{
//         if(res.indexOf(item) < 0){
//             res.push(item)
//         }
//     })
//
//     return res
// }
//
// console.log(unique([10,20,30,20,10,50,40,50]))

// 使用Set  无序结构，不能重复
function unique(arr) {
    const set = new Set(arr)
    return [...set]
}
console.log(unique([10,20,30,20,10,50,40,30,71]))
