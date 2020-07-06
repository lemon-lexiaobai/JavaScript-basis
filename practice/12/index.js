function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        // obj是null或 不是对象或数组，直接返回
        return obj
    }
    // 初始化返回结果
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(key in obj){
        // 保证 key 不是原型的属性
        if(obj.hasOwnProperty(key)){
            // 递归调用！！
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const obj1 = {
    a: 100,
    b: 200,
    c: [1, 2, 3],
    d: {
        e: 300,
        f: 400
    }
}
console.log(obj1)
const obj2 = obj1
console.log(obj2)
