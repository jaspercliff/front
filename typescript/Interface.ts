interface IPerson {
    name: string; //变量的属性得和接口一样
    age?: number; //？可以不存在
    [property:string]: any; //任意屬性
}

let tom:IPerson = {
    name: 'Tom',
    gender: 'male'
}
let fib = [1,1,2,3,5];
fib.push(8);

let array:Array<number> = [1,2,3];
let list:any[] = ['jasper',2,3];