const array = [1,2,3]
array.unshift(4);
// foreach 对数组中的每一个元素执行一次给定的函数
array.forEach(value => console.log(value))
array.push(5)
console.log(array)//[ 4, 1, 2, 3, 5 ]
// The indexOf() method returns the first
// index at which a given element can be found in the array,
// or -1 if it is not present.
console.log(array.indexOf(3));
//return  The filter() method creates a new array
// with all elements that pass the test implemented by the provided function
 const  a = array.filter((n)=>{
    return n>3;
})
console.log(a);
console.log("======");
// 空串的索引为0
console.log('abcde'.indexOf(''));
console.log("======");