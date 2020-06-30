const s = '1-2-3'

// split拆分成数组
let c = s.split('-')
console.log(c)

// 把数组拼接成字符串
console.log(c.join('-'))

/**
 * 数组API
 * 功能
 * 参数
 * 返回值
 * 会不会改变原数组
 * */
const arr = [10, 20, 30, 40]

/**
 * pop()
 * 删除最后一位元素
 * 没有参数
 * 返回被删除的元素
 * 改变原数组
 * */
// const popRes = arr.pop()
// console.log(popRes, arr)

/**
 * push()
 * 向后追加一位元素
 * 参数是新添加的元素
 * 返回数组的长度
 * 改变原数组
 * */
// const pushRes = arr.push(50)
// console.log(pushRes, arr)

/**
 * unshift()
 * 在最前面添加一个元素
 * 参数是新添加的元素
 * 返回数组的长度
 * 改变原数组
 * */
// const unshiftRes = arr.unshift(5)
// console.log(unshiftRes, arr)

/**
 * shift()
 * 删除最前面的元素
 * 没有参数
 * 返回被删除的元素
 * 改变原数组
 * */
// const shiftRes = arr.shift()
// console.log(shiftRes, arr)

/**
 * 纯函数：
 * 1、不改变原数组 （没有副作用）
 * 2、返回一个数组
 * */

/**
 * concat()
 * 在数组后面再追加一个数组
 * 参数为追加的数组
 * */
const arr1 = arr.concat([50,60,70])
console.log(arr1, arr)

/**
 * map()
 * 对数组的每一项进行改变
 * 参数为回调函数
 * */
const arr2 = arr.map(num => num*10)
console.log(arr2,arr)

/**
 * filter()
 * 过滤函数
 * */
const arr3 = arr.filter(num => num > 25)
console.log(arr3, arr)

/**
 * slice()
 * 类似于做了一个深拷贝
 * */
const arr4 = arr.slice()
console.log(arr4, arr)
