console.log('scroll')

window.addEventListener('scroll', function(){
    // 浏览器高度
    const clientHeight = document.documentElement.clientHeight
    // 滚动过去的距离
    const scrollTop = document.documentElement.scrollTop

    // 当前内容高度
    const scrollHeight = document.documentElement.scrollHeight
    if(clientHeight + scrollTop >= scrollHeight){
        // 检测到滚动至页面底部，进行后续操作

        const newEle = document.createElement('div')
        newEle.setAttribute('class', 'ccc')
        // 原生添加元素还是使用appendChild，参数是节点
        document.getElementById('root').appendChild(newEle)
    }
    console.log(clientHeight, scrollTop, scrollHeight)
})

/**
 * ParentNode.append方法在ParentNode的最后一个子节点之后插入一组Node对象或DOMString对象。
 * 被插入的DOMString对象等价为Text节点
 * 与appendChild的区别：
 * 1、append可以接受DOMString对象，但是appendChild只接受Node对象
 * 2、append没有返回值，appendChild返回追加的Node对象
 * 3、append可以追加多个节点和字符串，appendChild只能追加一个节点。
 *
 *
 *
 * appendChild：将一个节点附加到指定父节点的子节点列表的末尾处。
 * 如果将被插入的节点已经存在于当前文档的文档树中，那么appendChild会将它从原来的位置移动到新的位置。（不需要事先移除要移动的节点）
 * 意味着：一个节点不能同时出现在文档的不同的位置。
 * 某个节点已经拥有父节点，在被传递给此方法后，他首先会被移除，再被插入到新的位置。
 * 若要保留已在文档中的节点，可以使用cloneNode方法创建副本，再将副本附加到目标父节点下。
 * cloneNode制作的副本不会自动保持同步
 *
 * 返回值：追加后的子节点
 * */
