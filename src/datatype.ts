// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123 // 联合类型
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2 ,3] // number 类型的成员 组成一个数组
let arr2: Array<number | string> = [1, 2, 3, '4'] // 数组泛型

// 泛型的概念：不预先确定的数据类型，具体的类型在使用的时候才能确定

// 泛型的好处
// 1、增强程序的可扩展性：函数或类可以很轻松地支持多种数据类型
// 2、增强代码的可读性：不必写多条函数重载，或者冗长的联合类型声明
// 3、灵活地控制类型之前的约束

// 泛型的定义：使用 <>（尖角号）进行定义，通常使用 <T> 来作泛型的表示
function join<T> (first: T, second: T) {
  return `${first}${second}`
}
join <string> ('li', 'bin')
join <number> (1, 2)

// 元组
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
// let obj: object = {x: 1, y: 2}
// obj.x = 3

let obj2: {x: number, y:number} = {x: 1, y: 2}
obj2.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2); // return false

// undefined, null
let un: undefined = undefined // undefined 类型只能被赋值本身
let nu: null = null
num = undefined
num = null // null 和 undefined 是任何类型的子类型

// void
let noReturn = () => {}

// any 不是特殊情况不建议使用 any 类型
let x
x = 1
x = []
x = () => {}

// never // 永远不会有返回值的类型、(例如抛出异常的函数、死循环函数)
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while(true) {}
}