const square  = (num) =>{
    num = num*num;
    console.log(num);
// 与普通函数不同的是，箭头函数没有自己的 this 值，
// 因此在函数体中不能使用 this 关键字来引用函数的执行上下文
    console.log(this)
}
// 箭头函数中的 this 关键字是在定义函数时确定的，
// 而不是在运行时确定的。这意味着箭头函数中的
// this 始终指向函数定义时的上下文，而不是调用时的上下文
square(5);

