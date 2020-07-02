/**
 * 事件代理（委托）
 * */

// 事件代理
const p1 = document.getElementById('p1')
const body = document.body

bindEvent(body, 'click', '#p1', ()=>{
    // e.stopPropagation() // 阻止事件冒泡
    console.log('点击文字')
})
bindEvent(body, 'click', ()=>{
    console.log('取消点击')
})

function bindEvent(elem, type, selector, fn){
    // 检查个数
    if(fn == null){
        fn = selector
        selector = null
    }

    elem.addEventListener(type, event=>{
        const target = event.target
        if(selector){
            // 代理
            if(target.matches(selector)){
                fn.call(target, event)
            }
        }else{
            fn.call(target, event)
        }
    })
}

/**
 * result = element.matches(selectorString)
 *
 * result的值为true或false
 * selectorString是个CSS选择器字符串
 * */
