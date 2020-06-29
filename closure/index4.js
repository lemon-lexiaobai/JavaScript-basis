/**
 * 实际开发中闭包的应用
 *
 * 隐藏数据
 * 如做一个简单的cache工具
 *
 * 闭包隐藏数据，只提供API
 * */

function createCache(){
    const data = {} // 闭包中的数据，被隐藏，不被外界访问
    return {
        set: function(key, val){
            data[key] = val
        },
        get: function(key){
            return data[key]
        }
    }
}

const c = createCache()
c.set('a', 100)
// console.log(c.get('a'))

/**
 * 作用域和自由变量
 * 闭包：两种常见方式&自由变量查找规则
 * this
 * */

function Foo(){
    // 赋值语句  会将外层作用域内的getName函数修改了  如果window对象中没有getName属性，就会在window对象中创建一个
    getName = function(){ console.log(1) }
    return this
}
// 创建getName静态属性，不会覆盖上面的getName，静态方法是通过类来调用，不是实例来调用
// 静态属性指的是Class本身的属性，而不是定义在实例对象上的属性
Foo.getName = function(){ console.log(2) }
Foo.prototype.getName = function(){ console.log(3) }
// 函数表达式
var getName = function(){ console.log(4) }
// 函数声明，JS会将声明语句提升至代码最上方，导致函数表达式会覆盖该函数
function getName() { console.log(5) }

// Foo.getName() // 2
// getName() // 4
// Foo().getName() // 1 Foo()执行 会 重写window.getName
// getName() // 1
// new Foo.getName() // 2 将getName函数作为构造函数来执行
// new Foo().getName() // 3  (new Foo()).getName()
// new new Foo().getName() // 3 new ((new Foo()).getName)() 将原型上的getName函数作为构造函数再次new
