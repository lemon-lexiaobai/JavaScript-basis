// 通用的事件绑定函数
function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}

const btn1 = document.getElementById('btn1')

bindEvent(btn1,'click',event=>{
    // 获取触发的元素
    console.log(event.target)
    // 阻止默认行为
    event.preventDefault()
    console.log('clicked')
})

const body = document.body
bindEvent(body,'click',event=>{
    console.log('body clicked')
})

const div2 = document.getElementById('div2')
bindEvent(div2,'click',e=>{
    console.log('div2 click')
})

const p1 = document.getElementById('p1')
bindEvent(p1,'click',e=>{
    console.log('p1')
    e.stopPropagation() // 阻止冒泡
})

//事件代理： 代码简洁，减少浏览器内存占用
const div3 = document.getElementById('div3')
bindEvent(div3,'click',e=>{
    e.preventDefault()
    const target = e.target
    if(target.nodeName === "A"){
        console.log(target.innerHTML)
    }
})

// 通用类型的事件绑定函数
function newBindEvent(elem, type, selector, fn){
    // 检查参数个数
    if(fn == null){
        fn = selector
        selector = null
    }

    elem.addEventListener(type,event=>{
        const target = event.target
        if(selector){
            // 代理
            if(target.matches(selector)){
                fn.call(target,event)
            }
        }else{
            // 普通绑定
            fn.call(target,event)
        }
    })
}
