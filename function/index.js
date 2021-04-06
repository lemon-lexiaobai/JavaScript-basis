/**
 * 重写call
 * */
Function.prototype.call = function(context = window, ...args){
    if(typeof this !== 'function'){
        throw new TypeError('Type Error')
    }

    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...args)
    delete context[fn]
    return res
}

/**
 * 重写apply
 * */
Function.prototype.apply = function(context, args){
    if(typeof this !== 'function'){
        throw new TypeError('Type Error')
    }

    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...args)
    delete context[fn]
    return res
}

/**
 * 重写bind
 * */
Function.prototype.bind = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error('Type Error')
    }

    const self = this

    return function F(){
        // 返回的是一个函数，所以有可能new，这里要考虑new的情况
        if(this instanceof F){
            return new self(...args, ...arguments)
        }else{
            return self.apply(context, [...args, ...arguments])
        }
    }
}

/**
 * 区别：
 * call的参数第一个是新的this指向，其他的是函数的参数，返回函数的结果
 * apply只有两个参数，第一个是this指向，第二个是函数的参数组成的数组，返回函数的结果
 * bind参数与call一致，但是返回的一个函数，需要调用获取结果
 * */
