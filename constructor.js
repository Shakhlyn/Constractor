let a = "This is from constructor";
console.log(a);

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.hasJob = false;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

let R = new Person("John", "Doe");

class Worker extends Person {
  constructor(firstname, lastname, job) {
    super(firstname, lastname);
    this.job = job;
    this.hasJob = true;
  }
}

const sumit = new Worker("Sumit", "Saha", "Web developer");

console.log(sumit.firstname);
