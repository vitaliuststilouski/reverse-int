module.exports = function reverse (n) {
  const newNumber = `${n}`.split('').reverse().join('');
  return parseInt(newNumber);
}
