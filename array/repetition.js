// 数组去重
let a = [1, 1, '1', 17, true, true, false, 'true', 'a', {}, {}]
console.log(a)

// Set 去重
console.log([...new Set(a)])

// 双重for循环 + splice
const unqiue1 = arr => {
    for(let i = 0 ; i < arr.length; i++){
        for(let m = i + 1; m < a.lenght; m++){
            if(arr[i] === arr[m]){
                arr.splice(m, 1)
                m--
            }
        }
    }
    return arr
}

// indexOf
const unique2 = arr => {
    let res = []
    for(let i = 0 ; i < arr.length; i++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res
}

// includes
const unique3 = arr => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

// filter
const unique4 = arr => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

//map
const unique5 = arr => {
    let res = new Map()
    for(let i = 0; i < arr.length; i++){
        res.set(arr[i], arr[i])
    }
    return [...res.values()]
}

console.log(unique5(a))
