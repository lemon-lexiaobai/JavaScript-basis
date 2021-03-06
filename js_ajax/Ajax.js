// XMLHttpRrquest实现异步请求
const xhr = new XMLHttpRequest()

// true代表是异步请求，网络请求不能卡顿，所以使用异步
// open只是准备好了，但还没有访问
// GET是请求的方法
xhr.open('GET','http://localhost:3000/test',true)

// 对请求的状态进行监听，只要有变化就会执行函数
/**
 * readyState：0，1，2，3，4
 * 0：初始化状态，XMLHttpRequest对象以创建或已被abort()方法重置
 * 1 open：open方法已调用，但是send()方法未调用。请求还未发送
 * 2 sent：send()方法已调用，HTTP请求已发送Web服务器，但未收到响应
 * 3：所有响应头都已经收到。响应体开始接收但未完成
 * 4：HTTP响应已完全接收
 * */
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText)
        }else{
            console.log('其他情况')
        }
    }
}

// 这里是发送请求的地方
// 发送post请求时，参数是携带的数据，须是字符串，不能是JSON
xhr.send(null)

// 手写简单的Ajax
function ajax(url){
    const p = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText)
                }else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })

    return p
}

const url = 'http://localhost:3000/test'
ajax(url).then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})


// 2021/4/5 重写
const getJSON = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200 || xhr.status === 304){
                    resolve(xhr.responseText)
                }else{
                    reject(new Error(xhr.responseText))
                }
            }
        }
        xhr.send()
    })
}
