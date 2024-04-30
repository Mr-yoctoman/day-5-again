class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating ? rating : "PG";
  }
  static getPG() {
    // the below code will filter the movies list which are of rating "PG"
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// this movie1 code will create an instance as an object of Movie class
let movie1 = new Movie("Casino Royale", "EON Productions", "PG13");
console.log(movie1);
// these below code is the list of movies in an array
let movies = [
  new Movie("Casino Royale", "EON Productions", "PG13"),
  new Movie("Finding Nemo", "Pixar", "G"),
  new Movie("Toy Story", "Pixar", "G"),
  new Movie("Inception", "Warner Bros.", "PG-13"),
  new Movie("Up", "Pixar", "PG"),
];
// this below code will print only the movies which are rating of PG
let pgMovies = Movie.getPG(movies);
console.log(pgMovies);

// this is 2nd section of the task which creates the person class which hold all personal details.
class Person {
  constructor(name, dob, currentYear, jobTitle, location) {
    this.name = name;
    this.dob = dob;
    this.currentYear = currentYear;
    this.jobTitle = jobTitle;
    this.location = location;
  }
  getAge() {
    return this.currentYear - this.dob;
  }
}

let user1 = new Person("Ashu", 1990, 2024, "Web Developer", "Hyderabad");
console.log(user1.getAge());

// this is the 3rd section of the task which creates the Uber price calculation

class Uber {
  constructor(userName, distance, price) {
    this.userName = userName;
    this.distance = distance;
    this.price = price;
  }
  // the amount method will calculate according to the distance the user travelled
  amount() {
    if (this.distance <= 5) {
      return (this.price = this.distance * 3.5);
    } else if (this.distance > 5 && this.distance <= 14) {
      return (this.price = this.distance * 4.5);
    } else {
      return (this.price = this.distance * 5.6);
    }
  }
}

let uberUser1 = new Uber("Ashu", 30);
console.log(
  `the user name is ${uberUser1.userName} and he travelled the distance ${
    uberUser1.distance
  } and amount calculated is ${uberUser1.amount()}`
);
