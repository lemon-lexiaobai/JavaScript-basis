// Promise有三种状态 pending resolved rejected

// pending状态不会触发任何的回调
// resolved 状态会触发.then回调  rejected 状态会触发.catch回调

// 不管是.then还是.catch只要里面不报错就返回resolved状态的Promise，里面报错就返回rejected状态的Promise
Promise.resolve().then(()=>{
    console.log(1)
    throw Error('err')
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})
// 1,2,3
