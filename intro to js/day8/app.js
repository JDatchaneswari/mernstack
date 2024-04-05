function cardMouseIn(){
    console.log("Mouse is in the card")
}
function cardMouseOut(){
    console.log("Mouse is not in the card")
}
function cardClicked(){
    console.log("card is clicked")
}
function test(){
    let name =document.getElementById('name');
    //document.getElementById('data').innerText=name.value
    let data=name.value;
    let count=data.length;
    console.log(count);
    if(count<=3){
       name.classList.add('input-danger');
       name.classList.remove('input-success');
       document.getElementById('data').innerText='Enter atleast 4 char'
    }else{
       name.classList.add('input-success');
       name.classList.remove('input-danger');
       document.getElementById('data').innerText=' Good To go!'
    }
    console.log(name.value)
}
