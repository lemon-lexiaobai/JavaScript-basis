// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名： ${this.name}，学号： ${this.number}`)
    }
}

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach(){
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

// 通过类 new 对象/实例
// 学生实例
const lexiaobai = new Student('乐小白',100)
console.log(lexiaobai.name)
console.log(lexiaobai.number)
lexiaobai.sayHi()
lexiaobai.eat()

// 老师
const wang = new Teacher('王','语文')
console.log(wang.name)
console.log(wang.major)
wang.eat()
wang.teach()

// 每个class都有显式原型prototype  属性方法都在prototype中
// 每个实例都有隐式原型__proto__
// 实例的__proto__指向class的prototype
// 基于原型的执行规则
// 获取属性或执行方法时，先在自身属性和方法寻找，找不到就去__proto__寻找

//原型链
// 子类显式原型的隐式原型等于父类的显式原型
// 获取属性或执行方法时，在自身寻找，找不到就去__proto__寻找，链式串起来

// 最高级别父类的显式原型的隐式原型指向Object.prototype
// Object.prototype.__proto__ 指向 null

// hasOwnProperty 是在显式原型中查找， 该函数在object.prototype

// instanceof 沿着__proto__向上查找class的显式原型
