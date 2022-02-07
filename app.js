// installing testing module called jest
// npm init
// npm i --save-dev jest

// const add = (num1, num2) => num1+num2;
// const myArray = ['dan', 'tom', 'ben']

// module.exports = {
//     add,
//     myArray
// }

notNull = () =>{
    5;
  }
  
 isTrue = () =>{
    true;
  }
  
  function object(val1, val2) {
    return {
      val1: val1,
      val2: val2,
    };
  }
  
  const array = (input) => {
    let output = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].length >= 6) {
        output.push(input[i]);
      }
    }
    return output;
  };
  

  function numToStr(num) {
    return String(num);
  }
  
  function planet(num) {
    planets = ["Mercury", "Venus", "Earth", "Mars", "Jupyter"];
    return planets[num - 1];
  }
  
  function students(reg) {
    present = 0;
    for (const i in reg) {
      if (reg[i]) {
        present += 1;
      }
    }
    return present;
  }
  
  function sqrDigits(num) {
    num = String(num);
    num = num.split("");
    for (let i = 0; i < num.length; i++) {
      num[i] = Number(num[i]);
      num[i] = num[i] ** 2;
      num[i] = String(num[i]);
    }
    returnValue = "";
    for (let i = 0; i < num.length; i++) {
      returnValue = returnValue + num[i];
    }
    return (
        Number(returnValue),
        console.log(returnValue)
    )
  }
  sqrDigits(25)
//   const centuryOf = (year) => {
//     return floor(year / 100);
//   };
  
//   const binaryArrayToInt = (input) => {
//     for (let i = 0; i < input.length; i++) {
//       input[i] = String(input[i]);
//     }
//     input = input.join("");
//     return parseInt(input, 2);
//   };
  
  module.exports = {
    notNull,
    isTrue,
    object,
    array,
    numToStr,
    planet,
    students,
    sqrDigits,
    // centuryOf,
    // binaryArrayToInt,
  };

