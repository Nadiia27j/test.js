

// modul 4 

// 1/48

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
  
//   const result =  makePizza("Your pizza is being prepared, please wait.");
//   const pointer = makePizza;
  
// 2/48

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
  
// 3/48

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName) 
//   };
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
  
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//       console.log("Eating pizza ${pizzaName}")
// });
  
// 4/48

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//       if (!this.pizzas.find(pizza => pizzaName === pizza)) {
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//       return onSuccess(pizzaName);
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);
  
// 5/48

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
   
//     orderedItems.forEach(function(orderedItems, index) {totalPrice += orderedItems});
    
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
  
//     return totalPrice;
// }


// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); 

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]



// 6/48

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
  
  
//     numbers.forEach(function(number) {
//        if (number > value) {
//          filteredNumbers.push(number);
//        }
//     });
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
  
//     // Change code above this line
//     return filteredNumbers;
// }


  
// 7/48

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
   
//     firstArray.forEach(function(firstArray) {
//       if (secondArray.includes(firstArray)) {
//         commonElements.push(firstArray);
//       }
//     })
    
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
  
//     return commonElements;
  
// }
  

// 8/48

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }
  
  
//   // // function calculateTotalPrice(quantity, pricePerItem) {
//   // //   
//   // //   return quantity * pricePerItem;
// }
  

// 9/48

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 10/48

// Виконай рефакторинг функції calculateTotalPrice(orderedItems),
//  замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію,
//   передану в метод forEach(), на стрілочну функцію.*/


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
// }



// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
// }

// 11/48

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     return commonElements;
// }


// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     return commonElements;
// }
  
12/48

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
  
    firstArray.forEach(function (element) {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    return commonElements;
}



const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    return commonElements;
}
  

13/48
Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

function changeEven(numbers, value) { 

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
          numbers[i] = numbers[i] + value;
        }
    }   
}

1 var

function changeEven(numbers, value) {
    const newArray = numbers.map(number => number % 2 === 0 ? number += value : number
    );
    return newArray;
}

2 var

function changeEven(numbers, value) {
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {

        if (numbers[i] % 2 === 0) {
          newArray.push(numbers[i] + value);
        //   console.log(numbers);
          console.log(newArray);
        }
    }

  return newArray;
}


14/48

Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets;


const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

// 15/48

// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book => book.title);

// 16/48

// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);
  
// 17/48
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// const getUserNames = users => {
//     const nemes = users.map(user => user.name);
//    return nemes;
//   };

// 18/48

// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = users => {
//     const email = users.map(user => user.email) 
//     return email;
// };

// 19/48

// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


// const evenNumbers = numbers;
// const oddNumbers = numbers;

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// 20/48

// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
 
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter
//   ((genre, index) => allGenres.indexOf(genre) === index);
  
// 21/48

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);

// 22/48

// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) => {
 
// };

// const getUsersWithEyeColor = (users, color) => 
// users.filter(user => user.eyeColor === color)

 
// 23/48

// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge)
 


// 24/48

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
   


// 25/48

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const getFriends = (users) => users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index);
   

// 26/48

// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// const getActiveUsers = users => users.filter(user => user.isActive);
   

// 27/48

// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// const getInactiveUsers = users => users.filter(user => !user.isActive);
   
// 28/48

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.


// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

// 29/48

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.


// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
   

// 30/48

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(array => array % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(array => array % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(array => array % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(array => array % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(array => array % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(array => array % 2 !== 0);


// 31/48

// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// const isEveryUserActive = users => users.every(user => user.isActive);
   


// 32/48

// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// 33/48

// const isAnyUserActive = users => users.some(user => user.isActive);
   
// 34/48

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]


// const totalPlayTime = playtimes.reduce((acc, number) => {
// return acc + number;
// }, 0);


// const averagePlayTime = totalPlayTime / playtimes.length;

// 35.48

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);


// 36/48

// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const calculateTotalBalance = users => users.reduce((acc, user) => {
//   return acc + user.balance;
// }, 0);
   

// 37/48

// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// const getTotalFriendCount = users => users.reduce((acc, user) => [...acc, ...user.friends],
//  []).length;

// 38/48

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// 39/48

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// 40/48

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// 41/48

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];


// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((first, second) => first.rating - second.rating);

// const sortedByDescentingRating = [...books].sort((first, second) => second.rating - first.rating);


// 42/48

// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).

// const sortByAscendingBalance = users => users.sort((a, b) => a.balance - b.balance);



// 43/48

// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);



// 44/48

// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));


// 45/48

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
  

// 46/48

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);


// 47/48

// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getSortedFriends = users => [...users]
//   .flatMap(user => user.friends)
//   .filter((friends, index, array)  => array.indexOf(friends) === index)
//   .sort((a, b) => a.localeCompare(b)); 


// 48/48


// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender)
// .reduce((total, user) => total + user.balance, 0);
