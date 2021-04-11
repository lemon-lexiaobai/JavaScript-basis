let count = 10
const time = 1000

const CountEle = document.getElementById('count')
const ProEle = document.getElementById('pro')

const showCount = () => {
    CountEle.innerHTML = count
    if(count){
        setTimeout(()=>{
            if(count){
                count--
                showCount()
            }
        }, time)
    }else{
        ProEle.className = 'active'
    }
}
showCount()
