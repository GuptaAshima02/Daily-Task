const promise= new Promise((resolve,reject) => {
    const datafetch=fetch('https://jsonplaceholder.typicode.com/todos/')
  
     resolve(datafetch);

 });
 promise.then(res => res.json()).then((res) => console.log(res));
 