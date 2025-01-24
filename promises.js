function savetoDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) +1;
        if(internetSpeed>4){
            resolve("Sucess : data was saved ");
        }else{
            reject("Failure : weak connection");
        }
    });
}

savetoDb("Tejas Jore")
.then(()=>{
    console.log("data1 saved");
    return savetoDb("Tejas" );
})
.then(()=>{
    console.log("Data2 is saved");
})
.catch(()=>{
    console.log("Promise was rejected");
});
