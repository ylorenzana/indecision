class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name} and I am ${this.age}`;
  }

  getDescription() {
    return `${this.name} is ${this.age}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age, major);
    this.major = major;
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      return `${description} Majoring in ${this.major}.`;
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'Undetermined') {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    if (this.homeLocation) {
      return super.getGreeting() + ` I live in ${this.homeLocation}`
    }

    return super.getGreeting();
  }
}

const me = new Student('Yo boi', 22, 'CS');
console.log(me);
console.log(me.getDescription());

const anon = new Traveler('Mike', '20', 'Hawaii');
console.log(anon.getGreeting());