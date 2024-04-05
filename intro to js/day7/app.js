//array mapping and filters
//registration system
let users=[]
function addUser(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let ifUserExist= users.filter((data)=>{
       return data.email==email.value;
    })
    console.log("filter result",ifUserExist)
    let user={
        name:name.value,
        email:email.value
    }
    if(ifUserExist.length==0){
        users.push(user)
       renderUsers();
    }
    else{
        console.log('email exist')
    }
    users.push(user);
    console.log(users);
}
//assignment=>
//render the users in the main page using map and create elements
//choose 10 cities as exam centers and randomly allot a exam city to a user who has registered for the exam 
//function renderUsers(){
    let userlist =document.getElementById('userList')
    userlist.innerHTML='';
    users.map((user)=>{
        let userelement =document.createElement('div')
        userelement.innerHTML={Name:user.name,Email:user.email}
        userlist.appendChild(userelement);
    });
//}

// List of exam cities
let examCities = ['City1', 'City2', 'City3', 'City4', 'City5', 'City6', 'City7', 'City8', 'City9', 'City10'];

// Function to randomly select an exam city
function getRandomExamCity() {
    let random = Math.floor(Math.random()*examCities.length);
    return examCities[random];
}
function addUser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let examCity = getRandomExamCity();
    
}
let userr = [];
let userListContainer = document.getElementById('userlist');

function renderUsers() {
    userListContainer.innerHTML="";
    for(let i=0;i<userr.length;i++){
        let div = document.createElement('div');
        let name = document.createElement('div');
        let email = document.createElement('div');
        let examCity=document.createElement('div');

        div.classList.add('user');
        name.innerText = userr[i].name;
        email.innerText = userr[i].email;
        examCity.innerText=userr[i].examCity;
       userListContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(examCity);
        
    }
}

// Call renderUsers to initially render users (you can call it whenever needed)



