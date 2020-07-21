async function paf( ){
    const val=new Promise((resolve,reject)=>{
        setTimeout(() => {
            const error=false;
            if(!error){
                resolve(
                fetch("https://jsonplaceholder.typicode.com/todos")
                );
            }
            else{
                reject("error occured");
            }
        },0);
    })
    await val.then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error));
}
paf( );
