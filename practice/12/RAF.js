// 3s把宽度从 100px 变为 640px ，即增加 540px
// 60帧/s， 3s 180 帧， 每次变化 3px

const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640

// setTimeout
// function animate(){
//     curWidth = curWidth + 3
//     $div1.css('width', curWidth)
//     if(curWidth < maxWidth){
//         setTimeout(animate, 16.7) // 自动控制时间
//     }
// }
//
// animate()

// RAF  对性能进行优化
function animate(){
    curWidth = curWidth + 3
    $div1.css('width', curWidth)
    if(curWidth < maxWidth){
        window.requestAnimationFrame(animate) // 不用手动控制时间
    }
}
animate()

/**
 * 性能优化，方面
 * 原则： 多使用内存、缓存，减少计算、减少网络请求等
 * 方向： 加载页面，页面渲染，页面操作流畅度（RAF，防抖，节流）
 * */
