// Your code here
const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies)

const expect = chai.expect
const myMap = require('../problems/my-map')

describe('myMap function', () => {
    let arr
    let callback
    beforeEach(() => {
        arr = [1, 2, 3];
        callback = (el) => el * 2;
    })
    // it('should return an array', () => {
    //     expect(Array.isArray(myMap(arr, callback))).to.be.true()
    // })
    it('should not mutate array argument', () => {
        let arr2 = [...arr]
        myMap(arr, callback)
        expect(arr).to.eql(arr2)
    })
    it('should not use the built in map method', () => {
        const mapSpy = chai.spy.on(Array.prototype, "map")
        myMap(arr, callback)
        expect(mapSpy).to.have.not.been.called()
    })
    it('should invoke the callback on each element of the array argument', () => {
        expect(myMap(arr, callback)).to.eql([2, 4, 6])
    })
})
