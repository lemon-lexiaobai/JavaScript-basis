/**
 * 函数珂里化：
 * 指的是将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式，这样便于再次调用f(1)(2)
 * */
function add(){
    const _args = [...arguments]

    // 闭包，将获得的新参数，放到栈内
    function fn (){
        _args.push(...arguments)
        return fn
    }

    // 返回结果
    fn.toString = function(){
        return _args.reduce((sum, curr) => sum + curr)
    }

    return fn
}
console.log(add(1)(1,2,3)(2))
