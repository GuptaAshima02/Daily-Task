const promise= new Promise((resolve,reject) => {
   setTimeout(() => {
    // console.log("promise")
    reject("resolved")
   }, 2000);
});
promise.then(res => console.log(res)).catch(err => console.log(err));
// promise.catch(rej => console.log(rej));
