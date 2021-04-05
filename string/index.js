/**
 * 模拟字符串解析问题
 * 将{}内的变量替换，如果属性不存在，保持原样
 * */

const fn1 = (str, obj) => {
    let result = ''
    let start = 0
    let flag = false

    let len = str.length
    for(let i = 0; i < len; i++){
        if(str[i] === '{'){
            // 注意当前位置是起始大括号的位置，match时不需要带大括号
            start = i + 1
            flag = true
            continue
        }

        if(!flag){
            result += str[i]
        }else{
            if(str[i] === '}'){
                flag = false
                // console.log(str.slice(start, i))
                result += macth(str.slice(start, i), obj)
            }
        }
    }

    return result
}

const macth = (str, obj) => {
    // 可能是多级对象
    const keys = str.split('.').slice(1)
    let index = 0
    let o = obj

    while(index < keys.length){
        const key = keys[index]

        if(o[key]){
            o = o[key]
        }else{
            // 这个地方要注意要输出大括号
            return `{${str}}`
        }
        index ++
    }
    return o
}

let obj = {
    a: 123,
    b: 456,
    c: 789
}

console.log(fn1('asd{obj.a}qwe{obj.b}zxc{obj.c}qaz{obj.d}', obj))
