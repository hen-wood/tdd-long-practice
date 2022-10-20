module.exports = function reverseString(string) {
  // Your code here
  if (typeof string === 'string') {
    return string.split('').reverse().join('')
  } else {
    throw Error()
  }
};

// try {
// reverseString()
// } catch (error) {
//   console.log(error.message)
// }
// module.exports = function reverseString(string) {
//   // Your code here
//   if (typeof string === 'string') {
//     return string.split('').reverse().join('')
//   }
//   throw Error()
// }
