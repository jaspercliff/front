import('node-fetch');
const fetchPromise = fetch("https://api.uixsj.cn/hitokoto/get?type=hitokoto&code=json")
console.log(fetchPromise);
fetchPromise.then( (response)=>{
    console.log('have been receive respond: ${response.status}')
})
console.log('已经发送请求了');