/**
 * 函数声明和函数表达式
 *
 * 函数声明： function fn() {}
 * 函数表达式： const fn = function(){}
 *
 * 函数声明会在代码执行前预加载，而函数表达式不会
 * */

const res = sum(10, 20)
console.log(res)

// 函数声明
function sum(x, y){
    return x + y
}

/**
 * new Object() 和 Object.create()的区别
 *
 * {} 等同于 new Object(), 原型Object.prototype
 * */

const obj1 = {
    a: 10,
    b: 20,
    sum(){
        return this.a + this.b
    }
}

const obj2 = new Object({
    a: 10,
    b: 20,
    sum(){
        return this.a + this.b
    }
})

// const obj2 = nkew Object(obj1) // obj1 === obj2
const obj3 = Object.create(null) // 没有属性，没有原型
const obj4 = new Object() // {}

// Object.create是创建一个空对象，将空对象的原型挂在上面
const obj5 = Object.create({x: 100})

const obj6 = Object.create(obj1) // obj6的原型是obj1

const User = {
    count: 1,
    getCount: function() {
        return this.count
    }
}

console.log(User.getCount()) // 1
const fn = User.getCount
console.log(fn()) // undefined
