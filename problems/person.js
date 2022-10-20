class Person {
  constructor(firstname, age){
    this.firstname = firstname
    this.age = age
  }

  sayHello(){
    let greetingMessage = `${this.firstname} says hello`
    return greetingMessage
  }

}

module.exports = Person;
