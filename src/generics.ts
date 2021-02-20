// 泛型(一般的,不先确定的数据类型,具体的类型在使用的时候才能确定)

// 一个打印函数
function log(value: string) : string {
  console.log(value)
  return value 
}

// 期望返回一个字符串数组,函数改版
function log1(value: any) {
  console.log(value)
  return value
}

// 问题,any类型丢失了一些信息,类型之间的约束关系


// 使用泛型改造log函数,保证输入参数和返回值一致

function log2<T> (value: T) : T {
  console.log(value)
  return value
}

// 调用方式

log2<string[]>(['a', 'b'])
log2(['a', 'b']) // 使用类型推断

type Log = <T>(value: T) => T
let myLog: Log = log2


// 泛型接口
// interface Log3<T> {
//   (value: T) : T
// }

// // 当泛型变量约束了整个接口之后,在实现的时候,需要指定一个类型

// let myLog3 : Log3<number> = log2
// myLog3(3)


// 接口默认类型

interface Log3<T = string> {
  (value: T) : T
}

let myLog3 : Log3 = log2
myLog3('3')