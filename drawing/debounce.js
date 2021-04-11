const input1 = document.getElementById('input1')

// let timer = null
// input1.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//         // 模拟触发change事件
//         console.log(input1.value)
//
//         // 清空定时器
//         timer = null
//     },500)
// })

function debounce(fn,delay = 500){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn()
            timer = null
        },delay)
    }
}

input1.addEventListener('keyup',debounce(()=>{
    console.log(input1.value)
}))


/**
 * 高频触发时，n秒函数只会执行一次，如果n秒内高频触发时间再次触发，则会重新计算时间
 * 常用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次
 * */
const debounceCopy = (fn, time = 100) => {
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, time)
    }
}
