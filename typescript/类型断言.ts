interface Cat{
    name:string;
    run():void
}
interface Fish{
    name:string;
    swim():void;
}

function isFish(animal:Cat|Fish){
    if (typeof (animal as Fish).swim() ==='function'){
        return true;
    }
}

interface ApiError extends Error{
    code:number
}
interface HttpError extends Error{
    httpStatus:number
}
// 父类可以被断言为子类
function isApiError(error:Error){
    if(typeof (error as ApiError).code ==='number'){
        return true;
    }else{
        return false;
    }
}
