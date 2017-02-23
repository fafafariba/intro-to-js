//Non-filter
Array.prototype.myUniq = function () {
  let uniqArr = [];
  for(let i = 0; i < this.length; i++ ) {
    if(uniqArr.includes(this[i])) {
      continue;
    }
    else {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};

//Filter version
// Array.prototype.myUniq2 = () => {
//   this.filter( (el) => {
//     el % 2 === 0
//   });
// }


//Two sum
Array.prototype.twoSum = function () {
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {

      if (this[i] + this[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

Array.prototype.myTranspose = function () {
  let rows = this.length;
  let cols = this[0].length;
  let transposed = [];
  for(let i = 0; i < cols; i++) {
    transposed.push( new Array(rows));
  }
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
     transposed[j][i] = this[i][j];
    }
  }
  return transposed;
};

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].myTranspose());
