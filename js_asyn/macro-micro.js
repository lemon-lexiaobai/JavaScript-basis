// 宏任务： setTimeout，setInterval，Ajax，DOM事件    浏览器规定的
// 微任务： Promise，async/await  ES6规定的
// 微任务执行时机比宏任务早

// console.log(100)
// setTimeout(()=>{
//     console.log(200)
// })
// Promise.resolve().then(()=>{
//     console.log(300)
// })
// console.log(400)

// 宏任务： DOM渲染后触发，如setTimeout
// 微任务： DOM渲染前触发，如Promise

const con = document.getElementById('container')
const p1 = document.createElement('p')
p1.innerHTML = '一段文字'
con.append(p1)
console.log('666')
setTimeout(()=>{
    console.log('777')
})
Promise.resolve().then(()=>{
    alert('7788')
})

/*
 *  Call Stack 清空
 * 执行当前微任务
 * 尝试DOM渲染
 * 触发 event-loop
 * */
