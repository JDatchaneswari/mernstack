//console.log('task1');
//setTimeout(()=>{
    //console.log('task2');
//},2000)
//console.log('task3');
//const demoPromise = new Promise((resolve,reject)=>{
    //let status = true;
    //let status =false;
  //  setTimeout(()=>{
        //if(status===true){
           // console.log('download completed')
         //   resolve('task completed successfully!');
       // }
    //    else{
     //       reject('task failed!');
   //     }
  //  },3000)
//}) 
//demoPromise.then((data)=>{
    //access resolve data
    //console.log(data)
    //console.log('notification send')
//}).catch((error)=>{
    //console.log("rejected:",error)
//});

//fetch()=>inbuilt func of js we can write url inside fetch and it will give data fron API
//we only pass API or URl what happen if fetch is able to fetch data it will send resolve or it will send reject


//fetch("https://type.fit/api/quotes")
 // .then(function(response) {
    //return response.json();
  //})
  //.then(function(data) {
   // console.log(data);
  //});


  //fetch is a promise by default
fetchQuote=()=>{
  fetch("https://type.fit/api/quotes").then((data)=>{
    console.log('data fetched from URL')
   return data.json()
  }).then((data)=>{
    //console.log(data)
    let random = Math.floor(Math.random()*data.length);
    document.getElementById('quote').innerText=data[random].text;
    document.getElementById('author').innerText=data[random].author;
  });
}
fetchQuote()