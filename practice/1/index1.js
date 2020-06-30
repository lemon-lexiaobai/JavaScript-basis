/**
 * var是ES5的语法，let，const是ES6语法，var有变量提升
 *
 * var和let是变量，可修改；const是常量，不可修改
 *
 * let const 有块级作用域，var没有
 * */

// 变量提升
console.log(a) // undefined
var a = 100

// 块级作用域
for(let i = 0; i < 10; i++){
    let j = i + 1
}
console.log(j)

/**
 * typeof 能判断哪些类型
 * 值类型： undefined,string,number,boolean,symbol
 * 引用类型： Object(注： typeof null === 'object')
 * function
 * */

/**
 * 强制类型转换和隐式类型转换
 *
 * 强制类型转换： parseInt，parseFloat，toString等
 * 隐式类型转换： if、逻辑运算、==、+拼接字符串
 * */
