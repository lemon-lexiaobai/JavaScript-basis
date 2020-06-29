/**
 * this
 * 作为普通函数
 * 使用call apply bind
 * 作为对象方法被调用
 * 在class方法中被调用
 * 箭头函数
 *
 * this取什么值是在函数执行的时候确定的，不是在定义的时候确定的
 * */

// function fn1() {
//     console.log(this)
// }
// fn1() // window
//
// fn1.call({x:100}) // {x:100} call 一定义就执行
//
// const fn2 = fn1.bind({x:200}) // bind赋值给新的函数
// fn2() // {x:200}

// 例子1
const zhangsan = {
    name: '张三',
    sayHi(){
        // this当前对象
        console.log(this)
    },
    wait(){
        setTimeout(function(){
            // this === window
            console.log(this)
        })
    },
    waitAgain(){
        setTimeout(()=>{
            // 箭头函数  上级作用域this的值来决定
            // this即当前对象
            console.log(this)
        })
    }
}

zhangsan.sayHi()
zhangsan.wait()
zhangsan.waitAgain()
