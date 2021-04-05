/**
 * 这里的闭包可以理解为一个对象了
 * 每个对象数据是独立维护的
 * */
function creator(num){
    return function(){
        num = num * 2
        console.log(num)
    }
}

let double1 = creator(1)
double1() // 2
double1() // 4

let double2 = creator(3)
double2() // 6
double2() // 12


/**
 * 组件模式
 * 用于保护或隐藏某些信息
 * 暴露出模块的公有属性和方法
 * */
const myModule = (function(){
    const apiKey = '1234567'

    return {
        displayKey(){
            return apiKey
        }
    }
})()

console.log(myModule.displayKey()) // 1234567

/**
 * 基础缓存和记忆化
 * 当我们算法时间复杂度很高时，缓存非常有用
 * 可以将部分结果存储在缓存中
 * 当我们使用更高的数据进行计算时，我们可以使用缓存的数据作为基础
 * 过程叫做记忆化
 *
 * 可以用来处理递归
 * */

const factoriaMemo = (function(){
    let cache = {}
    return function factorial(num){
        console.log('doing factorial, this num is: ', num)
        if(num === 0 || num === 1){
            return 1
        }else if(cache[num]){
            return cache[num]
        }else{
            cache[num] = num * factorial(num - 1)
            return cache[num]
        }
    }
})()

factoriaMemo(5) // 会执行 5，4，3，2，1
factoriaMemo(6) // 只执行 6， 5

// 闭包是懒人的对象，对象是天然的闭包
