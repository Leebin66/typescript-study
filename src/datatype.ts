// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2 ,3]
let arr2: Array<number | string> = [1, 2, 3, '4']

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