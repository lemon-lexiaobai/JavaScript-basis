/**
 * 延时函数
 * */
function someTime(value, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value, Date.now())
            resolve()
        }, time * 1000)
    })
}

let arr1 = [
    {
        value: 12, time: 3
    },
    {
        value: 11, time: 2
    },
    {
        value: 10, time: 1
    }
]

async function doing(){
    for(let item of arr1){
        await someTime(item.value, item.time)
    }
}
// doing() // 顺序执行 3s后12，再2s后11，再1s后10

/**
 * 使用数组的map函数和Promise.all结合，并发执行异步操作
 * */
// let temp = arr1.map(item => {
//     return someTime(item.value, item.time)
// })

// 并发执行 1s后10，再1s后11，再1s后12
// Promise.all(temp).then(() => {
//     console.log('ok')
// })


/**
 * Promise.all并发数量限制
 * */
function multiRequest(urls = [], maxNum){
    let len = urls.length

    const result = new Array(len).fill(false)

    let count = 0

    return new Promise((resolve, reject) => {
        // 主要是第一次maxNum并发执行是使用
        while(count < maxNum){
            next()
        }
        next()

        function next(){
            let current = count++

            // 处理边界情况
            if(current >= len){
                // result确保所有的都执行完成，有可能最后一个先执行完，但前面的还没有执行完
                !result.includes(false) && resolve('complete')
                // resolve可以输出result，后面配合promise.all使用
                return
            }
            someTime(urls[current].value, urls[current].time)
                .then(() => {
                    result[current] = true
                    if(current < len){
                        next()
                    }
                })
                .catch(() => {
                    result[current] = true
                    if(current < len){
                        next()
                    }
                })
        }
    })
}

let urls = [
    {
        value: 12, time: 3
    },
    {
        value: 11, time: 2
    },
    {
        value: 10, time: 1
    },
    {
        value: 9, time: 5
    },
    {
        value: 8, time: 3
    },
    {
        value: 7, time: 4
    },
    {
        value: 6, time: 1
    }
]
multiRequest(urls, 3).then((data) => {
    console.log(data)
})
