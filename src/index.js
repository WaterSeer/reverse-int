module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let arrRev = [];
  for(let i = 0; i < arr.length; i++)
      arrRev[i] = arr[arr.length - 1 - i];
  return parseInt(arrRev.join(''), 10);
}
