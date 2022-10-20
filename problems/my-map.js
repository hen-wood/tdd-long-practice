function myMap(inputArray, callback) {
  let newArr = []
  for (let el of inputArray) {
    newArr.push(callback(el))
  }
  return newArr
}
module.exports = myMap;
