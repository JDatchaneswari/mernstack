const users = [
    {
      name: 'Amit Kumar',
      age: 28,
      gender: 'Male',
      location: 'Delhi',
    },
    {
      name: 'Priya Singh',
      age: 24,
      gender: 'Female',
      location: 'Mumbai',
    },
    {
      name: 'Rajesh Sharma',
      age: 14,
      gender: 'Male',
      location: 'Bangalore',
    },
    {
      name: 'Anjali Verma',
      age: 13,
      gender: 'Female',
      location: 'Chennai',
    },
    {
      name: 'Vikram Choudhary',
      age: 30,
      gender: 'Male',
      location: 'Hyderabad',
    },
    {
      name: 'Neha Gupta',
      age: 16,
      gender: 'Female',
      location: 'Kolkata',
    },
    {
      name: 'Avinash Kumar',
      age: 17,
      gender: 'Male',
      location: 'Pune',
    },
    {
      name: 'Sneha Joshi',
      age: 27,
      gender: 'Female',
      location: 'Ahmedabad',
    },
    {
      name: 'Rahul Mishra',
      age: 15,
      gender: 'Male',
      location: 'Jaipur',
    },
    {
      name: 'Kavita Rajput',
      age: 25,
      gender: 'Female',
      location: 'Lucknow',
    },
    {
      name: 'Arjun Singh',
      age: 33,
      gender: 'Male',
      location: 'Chandigarh',
    },
    {
      name: 'Smita Desai',
      age: 9,
      gender: 'Female',
      location: 'Bhopal',
    },
    {
      name: 'Gaurav Sharma',
      age: 14,
      gender: 'Male',
      location: 'Indore',
    },
    {
      name: 'Meera Kapoor',
      age: 8,
      gender: 'Female',
      location: 'Nagpur',
    },
    {
      name: 'Kiran Patel',
      age: 30,
      gender: 'Male',
      location: 'Surat',
    },
  ];
  
  console.log(users);
  
  let isadult= users.map((user)=>{
    if(user.age >= 18){
        return {
        name:user.name,
        age:user.age,
        location:user.location,
        adult:"true"
        }
    }
    else{
        return{ 
            name:user.name,
            age:user.age,
            location:user.location,
        adult:"false"
        }
    }
  })
console.log(isadult);

let adultUsers=isadult.filter((user)=>{
  return user.adult=="true";
})
console.log(adultUsers);


let getFullName=users.map((user)=>{
     return user.name+" "+user.location;
})
console.log(getFullName);


let userNames=users.map((user)=>{
    return user.name;
})
console.log(userNames)

let filterByGender=users.filter((user)=>{
if(user.gender=='Male'||user.gender=='Female'){
return "true";}
else{
    return "false";
}
})
console.log(filterByGender)


let femaleUsers=users.filter((user)=>{
   if(user.gender=="Female"){
    return user.gender;
   }
}).map((user)=>{
    return user.name;
})
console.log(femaleUsers)


const movies = [
    {
      title: 'Inception',
      genre: 'Sci-Fi',
      year: 2010,
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      year: 2008,
      rating: 9.0,
    },
    {
      title: 'Pulp Fiction',
      genre: 'Crime',
      year: 1994,
      rating: 8.9,
    },
    {
      title: 'Shawshank Redemption',
      genre: 'Drama',
      year: 1994,
      rating: 9.3,
    },
    {
      title: 'The Matrix',
      genre: 'Action',
      year: 1999,
      rating: 8.7,
    },
    {
      title: 'Interstellar',
      genre: 'Sci-Fi',
      year: 2014,
      rating: 8.6,
    },
    {
      title: 'Forrest Gump',
      genre: 'Drama',
      year: 1994,
      rating: 8.8,
    },
    {
      title: 'The Godfather',
      genre: 'Crime',
      year: 1972,
      rating: 9.2,
    },
    {
      title: 'Titanic',
      genre: 'Action',
      year: 1997,
      rating: 7.8,
    },
    {
      title: 'Jurassic Park',
      genre: 'Comedy',
      year: 1993,
      rating: 8.1,
    },
  ];
  console.log(movies);
  let filterByGenre=movies.map((user)=>{
    if(user.genre=='Action'||user.genre=='Comedy'){
        return "true";
    }
    else{
        return "false";
    }
  })
  console.log(filterByGenre);


let movieTitles=movies.map((user)=>{
    return user.title;
})
console.log(movieTitles);

let combinedResults = {
    AdultUsers:adultUsers,
    UserName:userNames,
    FemaleUsers:femaleUsers,
    movieTitle:movieTitles
}
console.log(combinedResults)