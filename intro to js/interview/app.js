//hoisting=> calling the variable before initialisation.

console.log(name);
var name='arpit';

//let username='khare';
//console.log(username);

//var a='datchu';
//var a='sarvana';
//console.log(a);

//let b='fifie';
//let b='gnvne';
//console.log(b);

//var=>function scope:
function demo(){
 var n=5;
 console.log(n);
 if(true){
    console.log('accessible var inside the if scope',n);
 }
}
//console.log(n);//=>shows error;
demo();
// becoz cant access var variable outside can acess only inside the function.

//let=>blocked scope  can access only inside the scope not outside.
function gem(){
   let n=5;
    console.log(n);
    if(true){
       // let n=5;
        console.log(n);
    }
    console.log(n);
}
gem();

//const=>Constant
//cant update the value if we do it shows error
const tax=10;
//const tax=15; error;
console.log(tax);


//const arr=[1,2,3,4,5];
//console.log(arr);
//arr.push(5); error
//console.log(arr);

const user={
    name:'yash',
    age:24
}
// can update values array and objects using const
console.log(user);
user.gender='male';
console.log(user);


//primitive and reference data type
//reference=>[],{}=>array,object we create needs brackets
//=>by default it donot store value refer to diff variable
//if changes done happens in both


//reference
let n=[1,2,3,4];
let app = n;
app.pop();
console.log(app );
console.log(n);


//primitive
let x=10;
let y=x;
y=20;
console.log(x,y);


//strict comparison and comparison

let num='10';
console.log(n);

if(n==10){
    console.log('the number is 10');
}

//how to empty an array without declaring the blank array.

let array=[1,2,3,4];
//array=[];
//solution:
array.length=0;
console.log(array);
//console.log(array.length);



//d
   //a
       //y
          //2

//array destructing
//array sortig
//callbacks
//clousers(very important topic)

let arr=[1,2,3];

//let a=arr[0];
//let b=arr[1];
//console.log(a,b);
//array destructing:=>accesing each and every element in array.

let [a,b,c]=arr;
console.log(a,b,c);

//array sorting
let users=['yash','nayan','ashish','kumar','kapil','kumaraguru'];
users.reverse();
console.log(users);
users.sort();
console.log(users);

//sort()=>sort the strings is basically used

let arri=[12,4,5,8,11,0,9,15,13,20,18];

//arri.sort();
//console.log(arri);
//=>there will no change no sorting it remains same

//arri.sort((a,b)=>a-b);
//console.log(arri);

//descending orders=>tosorted =>

//clousers=> if we have a outer func which has inner function.once i give the outer func to frame it can access the inner func inside outer function.
function bagpack(){
   function tiffin(){
    console.log('today we have sandwich');
   }
   return tiffin;
}
let result=bagpack();
console.log(result());
    //(or)
console.log(bagpack());

//callbacks: is a normal function works like a function in normal func we call the func 
// callback func will be called by someone else.

//defualt behaviur in js will not wait for first task to be complete.
//promises in js is ensure one first task been executed then ony second task is executed

//when this is done(fetch data from api)=>call a function.
  
function download(){
    console.log('downloaded');
    notify();//callback
}
function notify(){
    console.log('notification send')
}

download();
let ar=[1,2,3,4,5];
let res=ar.map(()=>{

})

fetch('url').then(()=>{
    console.log('sxsufe feovvvvv vdirbdeiei ');
    //callback=>a normal func which gets executed automatically once the previous task is done.
});

//advance sorting
//usecases of closures
//higher order functions
//event bubbling.
