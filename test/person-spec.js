const chai = require('chai')
const spies = require('chai-spies');
const Person = require('../problems/person');
chai.use(spies)
const expect = chai.expect;

describe('Person class', ()=> {
    let person
    beforeEach(()=>{
        person = new Person('mai', 32)
    })

    describe('Constructor', ()=> {
        it('should set the name and age properties', ()=>{
            expect(person).to.have.property('firstname')
            expect(person).to.have.property('age')
            expect(person.firstname).to.equal('mai')
            expect(person.age).to.equal(32)
        })
    })

    describe('sayHello', ()=> {
        it('should return a string of the Person instances name and a greeting message', ()=> {
            //let greetingMessage = `${Person.firstname} says hello`
            expect(person.sayHello()).to.equal('mai says hello')
        })

    })
    //describe('')


})
