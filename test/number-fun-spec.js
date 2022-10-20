const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const {returnsThree, reciprocal} = require('../problems/number-fun')


describe ('returns three function', () => {
    it('should return three', () => {
        expect(returnsThree()).to.equal(3)
    })
})
let num1 = 5
let num2 = 11
describe ('reciprocal function', () =>{
    context('valid arguments', ()=>{

        it('should return the reciprocal', ()=> {
            expect(reciprocal(num1)).to.equal(1/num1)
            expect(reciprocal(num2)).to.equal(1/num2)
        })



    })
    context('invalid arguments', ()=>{

        it('should throw an error if number is not between 1 and 1,000,000', () => {
            expect(()=> reciprocal(0)).to.throw(Error)
            expect(()=> reciprocal(1000001)).to.throw(Error)
        })

    })

})
