// 手写JSONP
var url = 'http://localhost:3000/select?callback=jsonp2'
var script = document.createElement('script')
script.setAttribute('src',url)
document.body.appendChild(script)

// 本地需要有与返回的callback函数名相同的函数,如：
function jsonp(data){
    console.log(data)
}

/**
 * 2021/4/5 重写
 * script不遵循同源协议，可以用来进行跨域请求
 * 优点是兼容性好，但仅限于GET请求
 */
const jsonp2 = (url, params, callbackName) => {
    // 拼接URL函数
    const generateUrl = (url, params, callbackName) => {
        let dataSrc = ''
        for(let item in params){
            if(Object.prototype.hasOwnProperty.call(params, item)){
                dataSrc += `${item}=${params[item]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((rsolve, reject) => {
        // 添加script标签
        const scriptEle = document.createElement('script')
        scriptEle.src(generateUrl(url, params, callbackName))
        document.body.appendChild(scriptEle)

        // 添加回调函数
        window[callbackName] = data => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}
