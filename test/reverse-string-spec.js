// Your code here
const chai = require('chai')
const expect = chai.expect
const reverseString = require('../problems/reverse-string')

let nonString1
let nonString2
let nonString3
describe('Reverse String Function', () => {
    let word = 'fun'
    it('should reverse string', () => {
        // expect((() => reverseString(word))()).to.equal('nuf')
        expect(reverseString(word)).to.equal('nuf')
    })
    nonString1 = true
    nonString2 = {}
    nonString3 = 100

    it('should throw an error if argument is not a string', () => {
        // expect(() => reverseString(nonString1)).to.throw(Error)
        // expect(() => reverseString(nonString2)).to.throw(Error)
        // expect(() => reverseString(nonString3)).to.throw(Error)
        expect(() => reverseString(nonString1)).to.throw(Error)
        expect(() => reverseString(nonString2)).to.throw(Error)
        expect(() => reverseString(nonString3)).to.throw(Error)
    })
})
/**
 * this function
 *      should do this
 *      should do that
 */
