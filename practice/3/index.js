const arr = [10, 20, 30, 40, 50]

/**
 * slice()
 * 截取数组，两个参数
 * 包含第一个参数下标，不包含第二个参数下标
 * 没有第二个参数，默认截取到结尾
 * 只截取最后几个，可用负数参数
 * 没有参数的话，类似于深拷贝
 * */
const arr1 = arr.slice(-2)
console.log(arr1) // [40, 50]
console.log(arr) // [10, 20, 30, 40, 50]

/**
 * arrayObject.splice(index, howmany, item1,...,itemX)
 * index 必须  整数  规定添加/删除项目的位置，使用负数可从数组结尾处规定位置
 * howmany 必须  要删除的项目数量  如果设为0 则不会删除项目
 * item1,...itemX 可选  向数组添加的新项目
 *
 * 返回值，包含被删除项目的新数组，如果有的话
 *
 * 会改变原数组
 * */
const arr2 = arr.splice(1,2,100,200,300,400,500)
console.log(arr2) // [20, 30]
console.log(arr) // [10, 100, 200, 300, 400, 500, 40, 50]

const res = [10, 20, 30].map(parseInt)
console.log(res)

/**
 * 上面的res可以拆解为：以下
 *
 * parseInt 两个参数：
 * 第二个参数代表前一个参数的进制情况，表示前一个参数是几进制的
 * 第二个值是2-36
 * 第二个参数为0时，默认为10进制
 *
 * 当第二个参数小于2或大于36，或  第一个非空字符不能转换为数字  时  返回NAN
 * */

[10, 20, 30].map((num, inedx)=>{
    return parseInt(num, index)
})
