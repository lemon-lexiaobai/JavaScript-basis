// 使用promise加载图片
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
loadImg(url).then((img)=>{
    console.log(img.width)
    return img
}).then(img=>{
    console.log(img.height)
}).catch(e=>{
    console.log(e)
})
