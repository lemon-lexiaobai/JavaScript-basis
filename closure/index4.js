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
console.log(c.get('a'))

/**
 * 作用域和自由变量
 * 闭包：两种常见方式&自由变量查找规则
 * this
 * */
