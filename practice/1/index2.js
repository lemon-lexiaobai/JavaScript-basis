/**
 * isEquel
 * */
// 判断是否是对象或数组
function isObject(obj){
    return typeof obj === 'object' && obj !== null ? true : false
}

// 全相等
function isEqual(obj1, obj2){
    if(!isObject(obj1) || !isObject(obj2)){
        // 值类型（注意：参与equal的一般不会是函数）
        return obj1 === obj2
    }
    if(obj1 === obj2){
        return true
    }
    // 两个都是对象或数组，而且不相等
    // 1、先取出 obj1 和 obj2 的keys，比较个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if(obj1Keys.length !== obj2Keys.length){
        return false
    }
    // 以obj1为基准，和obj2依次递归比较
    for(let key in obj1){
        // 比较当前key的value
        const res = isEqual(obj1[key], obj2[key])
        if(!res){
            return false
        }
    }
    // 全相等
    return true
}


const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

const a1 = [1,2,3]
const a2 = [4,5]

console.log(isEqual(a1, a2))
