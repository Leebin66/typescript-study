// 可读性差：很难记住数字的含义
// 可维护性差：硬编码，牵一发动全身
// 枚举的实现原理 - 反向映射

// 数字枚举，从0开始，可以自定义初始值
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter)
// console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举，数字和字符串 混用，数据混乱不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 0
enum Char {
    // const member
    a,
    b = Char.a,
    c = 1 + 3,
    // computed member（值被保留，在运行时环境才会被计算）
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举 （编译时被移除）（使用场景，当我们不需要一个对象，而需要对象中的值的时候就使用常量枚举，减少我们在编译环境的代码）
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// console.log(e === f)

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2)
// console.log(e1 === e3) 相同枚举类型-相同成员可以进行比较

let g1: G = G.a
let g2: G.a = G.a
