function feedback(){
      //console.log('feedback function called!');
      let title = document.getElementById('title');
      let btn = document.getElementById('btn');
      btn.style.display='none';
     // btn.style.backgroundColor='blueviolet';
      //btn.style.color='white';
      //title.innerText='Thanks for your Feedback!';
      //console.log(title)

//take input from user
let nameInput =document.getElementById('name')
console.log(nameInput.value)
let emailInput =document.getElementById('email')
console.log(emailInput.value)
let output="Thanks for the feedback "+nameInput.value;
title.innerText=output;
}