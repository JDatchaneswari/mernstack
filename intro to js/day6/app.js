let num=[1,2,3,4,5];
//for (let i=0;i<num.length;i++){
  //  console.log(num[i]);
//}

//FOR EACH FUNCTION

//num.forEach((a){
    //console.log(a*a*a);
//})


//let demo=num.forEach((n)=>{
  //  return n*n;
//})
//console.log(demo);



//map
let sqrs =num.map((n)=>{
     return (n);
})
console.log(sqrs);
//array mapping
const users = [
    {
      firstName: 'Aarav',
      lastName: 'Sharma',
      age: 28,
      salary:84000,
      gender: 'Male',
      email: 'aarav.sharma@example.com',
    },
    {
      firstName: 'Ananya',
      lastName: 'Patel',
      age: 24,
      salary:30000,
      gender: 'Female',
      email: 'ananya.patel@example.com',
    },
    {
      firstName: 'Arjun',
      lastName: 'Singh',
      age: 32,
      salary:40000,
      gender: 'Male',
      email: 'arjun.singh@example.com',
    },
    {
      firstName: 'Isha',
      lastName: 'Verma',
      age: 26,
      salary:77000,
      gender: 'Female',
      email: 'isha.verma@example.com',
    },
    {
      firstName: 'Rohan',
      lastName: 'Choudhary',
      age: 30,
      salary:80000,
      gender: 'Male',
      email: 'rohan.choudhary@example.com',
    },
    {
      firstName: 'Sanya',
      lastName: 'Gupta',
      age: 22,
      salary:22000,
      gender: 'Female',
      email: 'sanya.gupta@example.com',
    },
    {
      firstName: 'Vedant',
      lastName: 'Kumar',
      age: 29,
      salary:90000,
      gender: 'Male',
      email: 'vedant.kumar@example.com',
    },
    {
      firstName: 'Aditi',
      lastName: 'Joshi',
      age: 27,
      salary:13000,
      gender: 'Female',
      email: 'aditi.joshi@example.com',
    },
    {
      firstName: 'Aryan',
      lastName: 'Mishra',
      age: 31,
      salary:15000,
      gender: 'Male',
      email: 'aryan.mishra@example.com',
    },
    {
      firstName: 'Dia',
      lastName: 'Rajput',
      age: 25,
      salary:12000,
      gender: 'Female',
      email: 'dia.rajput@example.com',
    },
  ];
  
 
//let firstName=users.map((user)=>{
//   return user.firstName;
//})
//console.log(firstName);


//let names=users.map((user)=>{
   // return user.firstName+" "+user.lastName;
 //})
 //console.log(names)



 //filter

 //let males=users.filter((user)=>{
 //   return user.gender=='Male';
 //})
 //console.log(males);

//map=> putting all the values of array inside the function and storing the results inside the array we user the map.


//calculate the 10% tax for each user and store its name and tax 

let tax=users.map((user)=>{
    if(user.salary<50000){
   return{
    name:user.firstName,
    salary:user.salary,
    tax:user.salary*.1
   }
}else{
    return{
        name:user.firstName,
        salary:user.salary,
        tax:user.salary*.2
    }
}
})
console.log(tax)

let males=users.filter((user)=>{
    return user.gender =='Male'
}).map((user)=>{
    return user.firstName;
})
//let malesFirstName =males.map((user)=>{
  //return user.firstName
//})
//console.log(malesFirstName)
console.log(males)


//map and filters

//map=>mapping each element of my element
//perform something in each and every element of array
//store result into a different array.

let numb =[1,2,3,4,5]
let sqr = numb.map((n)=>{
    return n*n;
})

//let cub= numb.filter((n)=>{
  //  return n>4;
//}).map((n)=>{
    //return n*n*n;
//})
let cub= numb.map((n)=>{
  return n;
  }).filter((n)=>{
return n>4;
  })

console.log(numb)
console.log(sqr)
console.log(cub)

//chaining:
//map followed by filter or filter followed by map
//depending on our requirements we can use as many map and filters you want
//foreach=>values cannot be stored in an array
//chaining not possible
//if you only want to iterate every array value use forEach
//map=>store the result in an array
//if you wish to filter the value or store the result in an array
//chaining is possible
//filter
//=>
