function each(enumerable, callback) {
  for(let i = 0; i < enumerable.length; ++i) {
    callback(enumerable[i]);
  }
  return;
}

//each([1,2,3,4,5], (el) => console.log(el));
//each([1,2,3,4,5], function (el) { console.log(el)} );
//each([1,2,3,4,5], console.log);


function map(enumerable, callback) {
  let mapped = [];
  for(let i = 0; i < enumerable.length; ++i) {
    // if(i === 2) {
          //inserts blank (some falsey value)
    //   continue;
    // }
    mapped[i] = callback(enumerable[i]);
  }
  return mapped;
}

//console.log(map([1,2,3,4,5], (el) => { return el * 2;}));

function injection(enumerable, callback, acc = 0) {
  for(let i = 0; i < enumerable.length; i++) {
    acc = callback(acc, enumerable[i]);
  }
  return acc;
}

//console.log(injection([1, 2, 3, 4, 5], function (acc, el) { return acc += el;}));

function select(enumerable, callback) {
  let selected = [];
  for(let i = 0; i < enumerable.length; i++) {
    if(callback(enumerable[i]))
      selected.push(enumerable[i]);
  }
  return selected;
}

function strJoin(array) {
  return array.reduce((acc, word) => {
    return acc.concat(word);
  });
}

console.log(strJoin(["the", "dank", "memes"]));
