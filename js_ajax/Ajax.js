// XMLHttpRrquest实现异步请求
const xhr = new XMLHttpRequest()

// true代表是异步请求，网络请求不能卡顿，所以使用异步
// open只是准备好了，但还没有访问
// GET是请求的方法
xhr.open('GET','http://localhost:3000/test',true)

// 对请求的状态进行监听，只要有变化就会执行函数
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
