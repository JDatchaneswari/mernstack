function test(){
    console.log('Test function is called')
}

// adding event listenners

//targeting ID's

//let btn=document.getElementById('btn');
//btn.addEventListener('click',(event)=>{
//console.log(event.target.innerText)
//})

//Targeting classes

//let btn=document.querySelector('.btn');
//console.log(btn);
//btn.addEventListener('click',()=>{
  //  console.log('button is clicked')

//})


//Targeting html element

//let title = document.querySelector('h2');
//title.addEventListener('click',()=>{
//console.log("Heading is being clicked!")
//})

//let btns =document.querySelectorAll('.btn')
//console.log(btns)
//btns.forEach((btn)=>{
    //btn.addEventListener('click',(e)=>{
    //    console.log(e.target.innerText, 'is clicked')
  //  })
//})

//ASSIGNMENT 1
//ordered payable successful
//amount payable:price
//price is less than 200 rupess additional 40 rupees added mention in pop message


let foodItems =document.querySelectorAll('.card');
//console.log(btns)
foodItems.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(item.dataset.title,item.dataset.price)//item.dataset=>for information of one item
    })
})

