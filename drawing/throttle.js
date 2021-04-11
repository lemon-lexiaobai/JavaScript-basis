const div1 = document.getElementById('div1')

// let timer = null
// div1.addEventListener('drag',function(e){
//     if(timer){
//         return
//     }
//     timer = setTimeout(()=>{
//         console.log(e.offsetX,e.offsetY)
//         timer = null
//     },100)
//
// })

function throttle(fn,delay=100){
    let timer = null
    return function(){
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            // 使用apply(this,arguments)与参数有关系
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

div1.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
}))

/**
 * 节流，短时间高频触发，但指定时间内只会执行一次，会稀释函数的执行频率
 * */

const throttleCopy = (fn, time = 100) => {
    let timer = null
    return function(){
        if(timer) return
        // setTimeout返回值是一个整数
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, time)
    }
}
