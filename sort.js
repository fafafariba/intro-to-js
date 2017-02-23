function bubbleSort(array) {
  let swapped = true;

  while(swapped) {
    swapped = false;
    for(let i = 0; i < array.length-1; i++) {
      if(array[i] > array[i+1]) {
        //swap es6 :D
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swapped = true;
      }
    }
  }
}

let array = [5,3,4,1,2,7];
bubbleSort(array);
// console.log(array);

const substrings = (string) =>{
  let substringsArr = [];

  for(let i = 0; i < string.length; i++ ) {
    for(let j = i; j < string.length; j++) {
    let word = string.substr(i, (j-i)+1);
    console.log(string[i], string[j], word, substringsArr);
      if (!substringsArr.includes(word)) {
        substringsArr.push(word);
      }
    }
  }
  return substringsArr;
};
//console.log(substrings("cat"));

const range = (start, end) => {
  if (start === end) {
    return [end];
  }
  return range(start, end-1).concat(end);
};

//console.log(range(1,10));

const exponent = (base, power) => {
  if(power === 1)
    return base;
  return exponent(base, power-1) * base;
};

function fibonacci(n) {
  switch (n) {
    case 0:
      return [0];
    case 1:
      return [0, 1];
    default:
      let prev = fibonacci(n-1);
      prev.push(prev[n-1] + prev[n-2]);
      return prev;
  }
}
//console.log(fibonacci(10));


const bsearch = (array1, target) => {
  let ref = Math.floor(array1.length/2);

  if (target === array1[ref]) {
    return ref;
  } else if (target < array1[ref]) {
    return bsearch(array1.slice(0, ref), target);
  } else if (target > array1[ref]) {
    return ref + 1 + bsearch(array1.slice(ref+1), target);
  } else {
    return null;
  }
};
console.log (bsearch([1, 2, 3], 1)); //0
console.log(bsearch([2, 3, 4, 5], 3)); //1
// bsearch([2, 4, 6, 8, 10], 6) //2
// bsearch([1, 3, 4, 5, 9], 5)  //3
console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); //5
// bsearch([1, 2, 3, 4, 5, 6], 0) // nil
console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // nil
