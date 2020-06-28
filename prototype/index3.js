// 手写简易的jQuery
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i = 0; i < length; i++){
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0; i < this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
    // 扩展更多的API
}

// 插件
jQuery.prototype.dialog = function(info){
    alert(info)
}

// 扩展性 造轮子，复写
class myjQuery extends jQuery{
    constructor(selector) {
        super(selector);
    }
    // 扩展自己的方法
    addClass(className){
    }
}

// 调用例子
// const $p = new jQuery('p')
// $p.get(1)
// $p.each(elem => console.log(elem.nodeName))
// $p.on('click',()=> alert('clicked') )
