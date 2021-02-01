// 函数定义
function add1(x: number, y: number) {
    return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}

add1(1, 2, 3) // ts中形参和实参必须一一对应

function add5(x: number, y?: number) { // 可选参数必须位于必选参数之后 
    return y ? x + y : x
}
add5(1)

function add6(x: number, y = 0, z: number, q = 1) { // 函数参数默认值
    return x + y + z + q
}
add6(1, undefined, 3) // 使用时，在必选参数之前的默认值参数，如果要不修改其默认值，需要传入 undefined, 在必选参数之后的默认参数，可以不传

// 当参数不固定的时候，使用剩余参数
function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
} 
add7(1, 2, 3, 4, 5)


// 函数重载-匹配规则，从上到下进行匹配，把常用的匹配规则代码写在上面
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
