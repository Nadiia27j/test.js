
// modul 2


// 11/31 

// function calculateEngravingPrice(message, pricePerWord) {
 
// let word = message.split(" ");
// const wordLength = word.length;
// const totalPrice = wordLength * pricePerWord;
// console.log(totalPrice);
// return totalPrice;


 
// } 

// 16/32 

// function makeArray(firstArray, secondArray, maxLength) {
  
//  let result;
//  result = firstArray.concat( secondArray) >= maxLength? result = firstArray : firstArray.concat(secondArray).slice(0, maxLength);
//  return result;

 
// }

// 

// 18/32 

// function calculateTotal(number) {
 
//   let total = 0;
//   for ( i = 0; i <= number; i += 1) {
//      total += i;
//   }
//   return total;
  
    
// }


// 19/32

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// 20/32 ОБЧИСЛЕННЯ СУММИ ПОКУПКИ

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice(''))


// 21/32  ПОШУК НАЙДОВШОГО СЛОВА

// function findLongestWord(string) {
 
// let longest = 0;
// let array = string.split(" ");
// for (i = 0; i <array.length; i+=1) {
//   if (array[i].length > array[longest].length) {
//     longest = i}
  
// }
// return array[longest]

// }
// console.log(findLongestWord('string'))

// 22/32

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for ( let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }



// 23/32

// function filterArray(numbers, value) {
  
// const elements = [];

//  for(const item of numbers){
//    console.log(item);
//    if (item > value) {
//      elements.push(item);
//    }
//  }

// return elements;

// }
// console.log(filterArray('numbers, value'))

// 24.32
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }

// 25/32


// function getCommonElements(array1, array2) {
//   // Change code below this line
// let array3 = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       (array3.push(array1[i]));
//     }
//   }
//   return array3;
//  // Change code above this line
// }


// 26/32

// function calculateTotalPrice(order) {
//   let total = 0;
 
// for (const item of order) {
//   total += item;
// }
//   return total;
// }


// 27/32 
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     // for (let i = 0; i < numbers.length; i += 1){
//     //   const number = numbers[i];
  
//     //   if (number > value) {
//     //     filteredNumbers.push(number);
//     //   }
//     // }
  
//     for (const number of numbers) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
// }






// 28/32
// остаток від ділення:


// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;


// 29/32
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).


// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let newArray = [];
 
//     for (let i = start; i <= end; i+= 1) {
//        if (i % 2 === 0){
//          newArray.push(i);
//        }
//      } 
 
    
//     return newArray ;
//      // Change code above this line
//    }

// 30/32

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


// 31/32
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return number;
//       }
//     }
  
//     return number;
//     // Change code above this line
//   }
  


// 32/32

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).


// function includes(array, value) {
//     // Change code below this line
  
//    for(const oneElementArray of array) {
//      if (oneElementArray === value) {
//        return true;
//      }
//    }
//    return false;
//     // Change code above this line
//   }