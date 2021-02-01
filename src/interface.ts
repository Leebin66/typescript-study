// 从后端接口或者数据，渲染到页面上

interface List {
    readonly id: number; // 只读属性
    name: string;
    // [x: string]: any; // 字符串索引签名（任意的字符串索引任意的类型）
    age?: number; // 可选属性（这个属性可有可无）
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        // value.id++
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
}
render(result)

// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, // 使用对象字面量，编译时会报错
//         {id: 2, name: 'B', age: 10}
//     ]
// })

// // 解决：1、使用变量  2、使用类型断言
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, // 使用对象字面量，编译时会报错
//         {id: 2, name: 'B', age: 10}
//     ]
// } as Result)

// // 类型断言的写法2
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, // 使用对象字面量，编译时会报错
//         {id: 2, name: 'B', age: 10}
//     ]
// })

interface StringArray { // 用数字索引一个接口
    [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names { // 用字符串索引一个接口
    [x: string]: any;
    // y: number;
    [z: number]: number;
}


// 函数类型的接口

// 1、基本用法
// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }

// 2、使用类型别名定义函数接口
type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b

// 3、混合类型
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
