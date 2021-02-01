// ts中的类，内部属性只在实例上，不再原型上
// 实例的属性必须有初始值，或者在构造函数中被初始化


abstract class Animal {
    eat() { // 定义方法，子类可以直接使用
        console.log('eat')
    }
    abstract sleep(): void // 抽象方法，子类中可以任意实现
}
// let animal = new Animal() // 抽象类，只能被继承，不能被实例化的类

// 派生类的构造函数，必须包含 super 调用
class Dog extends Animal {
    // private constructor(name: string) { // 既不能被实例化，也不能被继承
    // protected constructor(name: string) { // 这个类不能被实例化，只能被继承，先当于声明了一个基类
    constructor(name: string) {
        super() // 代表父类的实例，this 在 super 调用后再调用
        this.name = name // 初始化语句
        this.pri()
    }
    public name: string = 'dog' // 类的修饰符
    run() {}
    private pri() {} // 私有成员 不能被访问
    protected pro() {} // 受保护成员 只能类或者子类中访问，而不能再类的实例中访问
    readonly legs: number = 4 // 只读属性
    static food: string = 'bones' // 静态成员 只能通过类名调用，可以被继承
    sleep() {
        console.log('Dog sleep')
    }
}
// console.log(Dog.prototype)
let dog = new Dog('wangwang')
// console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)
dog.eat()

class Husky extends Dog {
    constructor(name: string, public color: string) { // 除了类的成员可以添加修饰符之外，构造函数的参数也可以添加修饰符，作用是，将参数自动变成了实例的属性，这样就能够省略在类中的定义了（简化代码）
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }
    // color: string
}
console.log(Husky.food)



// ts 中的 多肽
class Cat extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}
let cat = new Cat() // 创建 Cat 的实例

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
    i.sleep()
})


// ts方法的链式调用
class Workflow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
    next() {
        return this
    }
}
new MyFlow().next().step1().next().step2()
