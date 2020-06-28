// 类
class Student {
    constructor(name, number){
        this.name = name
        this.number = number
        this.gender = 'male'
    }
    sayHi(){
        console.log(`姓名：${this.name}， 学号：${this.number}`)
    }
}

// 通过类 new 对象/实例
const lexiaobai = new Student('乐小白',100)
console.log(lexiaobai.name)
console.log(lexiaobai.number)
lexiaobai.sayHi()
