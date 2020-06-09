// 手写JSONP
var url = 'http://localhost:3000/select?callback=jsonp2'
var script = document.createElement('script')
script.setAttribute('src',url)
document.body.appendChild(script)

// 本地需要有与返回的callback函数名相同的函数,如：
function jsonp(data){
    console.log(data)
}
