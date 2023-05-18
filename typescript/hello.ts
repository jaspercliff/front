// : 指定变量的类型 只会在编译时对类型进行静态检查
function sayHello(person:string){
    return 'hello'+person
}
let user='jasper'

console.log(sayHello(user))
//variable
//基本类型
let isDone = false;
let a = 6;
let b = 0xf00d;
let hobby = 'smoke';
//模板字符串是一种在编程语言中用来创建字符串的语法，它允许开发者在字符串中插入表达式和变量，并且可以进行多行字符串的创建
// 其中插入的表达式和变量使用 ${} 来表示。
let sentence = `my hobby is ${hobby}`;
console.log(sentence);
//任意值
let x = 'jasper';
x = '20';