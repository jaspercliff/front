/**
 * 解构赋值
 */
// for arr
const arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c)
//for object
const obj = {name:'jasper',age:21}
const {name,age} = obj
console.log(name,age)
// specify the default value for the variable
const arr1 = [1,2]
const [d,e,f=5]=arr1
console.log(d,e,f)

const obj1 = {name1:'cliff'}
const {name1,age1 = 23} = obj1
console.log(name1,age1)

//rest 语法
const arr2 = [1,2,3,4]
const [a1,...rest] = arr2
console.log(a1,rest)

const obj3 = {name2:'jasper',age:21,gender:'female'}
const {name2,...rest1} = obj3
console.log(name2,rest1)
