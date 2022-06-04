
export function LoginUser({userName,password}){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(password=="siddu123" && userName==="siddu"){
                resolve();
            }
            else{
                reject(new Error("Inavlid username or password"));
            }
        },1000)
    })
}