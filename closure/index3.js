/**
 * 手写bind函数
 * */

// 模拟 bind
Function.prototype.bind1 = function () {
    // 将参数拆解为数组 arguments:获取函数的所有参数
    const args = Array.prototype.slice.call(arguments)

    // 获取this （数组第一项）,并在数组中删除第一项
    const t = args.shift()

    // fn1.bind(...)中的fn1
    const self = this

    // 返回一个函数
    return function(){
        return self.apply(t, args)
    }
}

// bind应用
function fn1(a,b,c){
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}

// bind第一个参数是this，后面是函数的参数，这里相当于a,b,c的取值
const fn2 = fn1.bind1({x:100}, 10, 20, 30)
const res = fn2()
console.log(res)
