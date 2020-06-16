// async/await 是消灭异步回调的终极武器
// async/await 是用同步的代码写异步，改变不了异步的本质

async function async1(){
    console.log('async1 start') // 2
    await async2()  // await 后面可以看做是callback里的内容，即异步
    console.log('async1 end') // 5
}

async function async2(){
    console.log('async2') // 3
}

console.log('script start') // 1
async1()
console.log('script end') // 4
