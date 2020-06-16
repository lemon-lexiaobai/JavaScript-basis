// async/await是同步语法，彻底消灭回调函数

function loadImg(src){
    return new Promise((resolve,reject)=>{
        const img = document.createElement('img')
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = ()=>{
            reject(new Error(`图片加载失败${src}`))
        }
        img.src = src
    })
}

const url = 'https://img2.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg'

// 匿名函数立马执行
// 执行await时必须用async包裹 直接执行await会报错
// await后面可以追加Promise对象，也可以追加async的函数
!(async function(){

    const img1 = await loadImg(url)
    console.log(img1.height,img1.width)

})()
