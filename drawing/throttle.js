const div1 = document.getElementById('div1')

let timer = null
div1.addEventListener('drag',function(e){
    if(timer){
        return
    }
    timer = setTimeout(()=>{
        console.log(e.offsetX,e.offsetY)
        timer = null
    },100)

})
