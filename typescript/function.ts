function sum(x:number,y:number){
    return x+y;
}
console.log(sum(2, 3));
// 可选参数必须在必需参数之后
function buildName(firstName:string,lastName?:string){
    if (lastName){
        return firstName+lastName
    }else{
        return firstName
    }
}

console.log(buildName('tom', 'jasper'));
console.log(buildName('cliff'));
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:string|number):string|number|void{
    if(typeof x ==='number'){
        return Number(x.toString().split('').reverse().join(''));
    }else{
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123));
console.log(reverse('jasper'));