// async/await和Promise的关系
// async/await是消灭异步回调的终极武器，但和Promise并不互斥

// 1、async返回的是Promise对象
async function fn1() {
    return 100  // 相当于 return Promise.resolve(100)
}

const res1 = fn1() // 执行 async 函数，返回的是一个 Promise 对象
console.log('res1',res1)

res1.then(data=>{
    console.log('data',data)
})

// 2、await相当于.then
!(async function(){
    const p1 = Promise.resolve(300)
    const data = await p1 // await 相当于 Promise then
    console.log('data',data)
})()

!(async function(){
    const data1 = await 400 // await 相当于 Promise.resolve(400)
    console.log('data1',data1)
})()

!(async function(){
    const data2 = await fn1()
    console.log('data2',data2)
})()

// try..catch 与 promise .catch
!(async function(){
    const p4 = Promise.reject('err4')
    try{
        const res = await p4
        console.log(res)
    }catch(ex){
        console.error(ex)  // try..catch 相当于 promise catch
    }
})()
