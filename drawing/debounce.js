const input1 = document.getElementById('input1')
let timer = null
input1.addEventListener('keyup',function(){
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(()=>{
        // 模拟触发change事件
        console.log(input1.value)

        // 清空定时器
        timer = null
    },500)
})
