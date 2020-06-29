// 创建十个‘<a>’标签，点击的时候弹出来对应的序号
let a = 0
for(let i = 0; i < 10; i++){
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click',function(e){
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}

/**
 * 作用域
 * 全局作用域
 * 函数作用域
 * 块级作用域
 * */

/**
 * 自由变量
 * 一个变量在当前作用域没有定义，但被使用了
 * 向上级作用域，一层一层依次寻找，直到找到为止
 * 如果全局作用域都没找到，则报错xx is not defined
 *
 * 自由变量的查找是在函数定义的地方，向上级作用域查找，不是在执行的地方
 * */
