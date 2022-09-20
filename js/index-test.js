
// масиви початок

// const friends = ['Mango', 'Kiwi', 'Poly'];
// console.table(friends);

// friends[1] = '45556';

// console.table(friends);




// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }





// ПЕРЕБІР(ІТЕРАЦІЯ)МАСИВУ

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1){
//     console.log(friends[i]);
// }

// те саме але for of, якщо не потрібен індекс

// for (const friend of friends){
//     console.log(friend);
// }

    

// ЯКЩО ТРЕБА ПІДРАХУВАТИ ЗАГАЛЬНУ СУМУ ПОКУПОК В КОРЗИНІ
// 1. Перебрати масив
// 2. Зробити змінну total до циклу
// 3. Кожний елемент приплюсувати до total

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {   
//     console.log(cart[i]);

//     total += cart[i];
// }

// console.log('Total: ', total);







// РЕпета:

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for ( let i = 0; i < numbers.length; i += 1 ) {
//    const number = numbers[i];
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное!!!!');

//     total += number;
//   }
// }

// console.log('Total: ', total);

// 2 варіант


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for ( const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('Четное!!!!');
//         total += number;
//     }
// }

// console.log('Total: ', total);


// 3 variant

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for ( const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('цю ітерацію пропустити', number);
//         continue;
//     }

//     console.log('Четное!!!!');
//     total += number;
// }

// console.log('Total: ', total);


// скрипт пошука логіна: for

// const logins = ['jfhhjgjh', 'uhgjgfjh', 'gghhggh', 'ggfgfg'];
// const loginToFind = 'gghhggh';
// let message = 'користувач ${loginToFind}  не знайдений';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if(login === loginToFind) {
//         message = 'користувач ${loginToFind} знайдений';
//         break;
//     }

//     message = 'користувач ${loginToFind}  не знайдений';
// }

// console.log(message);


// 2 варіант for of:

// const logins = ['jfhhjgjh', 'uhgjgfjh', 'gghhggh', 'ggfgfg'];
// const loginToFind = 'gghhggh';
// let message = 'користувач ${loginToFind}  не знайдений';

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log('${login} === ${loginToFind}: ', login === loginToFind);

//     if(login === loginToFind) {
//         console.log('рівні!!!');
//         message = 'користувач ${loginToFind} знайдений';
//         break;
//     }
// }

// console.log(message);


// 3 варіант includes^

// const logins = ['jfhhjgjh', 'uhgjgfjh', 'gghhggh', 'ggfgfg'];
// const loginToFind = 'gghhggh';
// let message = `користувач ${loginToFind}  не знайдений`;

//  message = logins.includes(loginToFind) ? 'yes' : 'no' ;
// console.log(message);




// змінює регістр кожного символу на протилежний:

// const string = 'JavaScript';
// const letters = string.split('');

// console.log(letters);









// Примітивні типи

// передача по значенню:

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);



// передача по посиланню


// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);


// console.log(a === b);



// Додаткове заняття js:


// 3.
// потрібно  порахувати за скільки днів Равлик зможе виповзти з колодязя
// в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні


// const depth = 42;
// const daySpeed = 7;
// const nightSpeed = 2;
// let days = 0;
// let totalPass = 0;

// while (totalPass < depth) {
//     totalPass += daySpeed;
//     days += 1;

//     if(totalPass < depth) {
//         totalPass -= nightSpeed;
//     }  
// }

// console.log(days);



// Створюємо функцію яка приймає 2 параметра:
// 1. спільний мвсиі всіх користувачів
// 2. масив коритсувачів чоловічої статі
// В результаті виконаня функція повинна повернути масив користувачів жіночої статі

// 1/створити новий масив
// 2/ створити функціюю sortUser
// 3. створюємо тіло функції



// const all = [
//     "Artem",
//     "Anna",
//     "Larisa",
//     "Maksim",
//     "Svitlana",
//     "David",
//     "Roman",
//     "Olga",
// ];

// const boys = ["Artem", "Maksim", "David",  "Roman"];



// const sortUser = function (allName, boysName) {
//     const sortUser = [];

//   for (const item of allName) {
//      //  if(!boysName.includes(item)) {
//      //     sortUser.push(item)
//      //    }
//       !boysName.includes(item) ? sortUser.push(item) : sortUser;
//     }

//     return sortUser;
// }
// console.log(sortUser(all, boys));


// пробне

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = [];
// // for (let i = 0; i < numbers.length; i += 1) {
    
// //     console.log(numbers[i]);
// // }

// numbers.forEach(function (number, index) {
//     if(number >= 2) {
//         newNumbers.push(number);
//     }
// });
// console.log(newNumbers);



// Потрібно створити функцію  яка буде находити вмасиві елементи що дублюються а потім ці елементи додати в новий масив.

// 1. перебираємо масив
// 2. порівнюємо елемент з наступними елементами масиву
// 3. якщо масив містить елемент додаємо в новий масив

// const items = [1, 2, 3, 2, 1, 17, 19];

// function findElements(items) {
//     const elements = [];

//   for (let i = 0; i < items.length; i += 1) {
//     for (let j = i + 1; j < items.length; j += 1) {
//       if (items[i] === items[j]) {
//         elements.push(items[i]); 
//       } 
//     }
//   }
//   return elements;
// }

// console.log(findElements(items));

// Вирізати зайві і залишити унікальні:

// const items = [1, 2, 3, 2, 1, 1, 17, 19];

// function findElements(items) {
   
//   for (let i = 0; i < items.length; i += 1) {
//     for (let j = i + 1; j < items.length; j += 1) {
//       if (items[i] === items[j]) {
//        items.splice(j, 1);
//        j -= 1;
//       } 
//     }
//   }
//   return items;
// }

// console.log(findElements(items));



//  Зробіть функцію, яка бере масив імен людей, які поставили лайки. Вона має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// 1.Створити функцію;
// 2.Створюємо змінну;
// 3.Перевірити довжину масиву,якщо пустий повертаєм рядок  "no one likes this";
// Якщо довжина масиву 1, то берем елемент з [0] + likes this;
// Якщо довжина масиву 2, то ми беремо [0] and [1] + like this;
// Якщо довжина масиву 3, то беремо  [0], [1] and [2] + like this;
// Якщо довжина масиву 4 і більше, то беремо  [0] + [1] and + (довжина масиву - 2);


// function nameLike (names) {
//   let message = "no one likes this";

//   switch (names.length) {
//     case 0:
//      break;

//     case 1:
//      message = `${names[0]} likes this`;
//      break;

//     case 2:
//      message = `${names[0]} and ${names[1]}  likes this`;
//      break;

//     case 3:
//      message = `${names[0]}, ${names[1]} end ${names[2]} likes this`;
//      break;

//     default: message = `${names[0]}, ${names[1]} and ${names.length - 2} likes this`;
//   }

//   return message;
// }

// console.log(nameLike([]));
// console.log(nameLike(["Peter"]));
// console.log(nameLike(["Jacob", "Alex"]));
// console.log(nameLike(["Max", "John", "Mark"]));
// console.log(nameLike(["Alex", "Jacob", "Mark", "Max"]));
// console.log(nameLike(["Alex", "Jacob", "Mark", "Max", "Anna", "Nadia"]));

// 30.07.22 урок

// 1.Перебрати масив
// 2.створити змінну

// Книга Гарі Потер є в: 
// 1 Anna 
// 2 Oliksii

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"]},
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"]},
// ]

// const filteredFriwnds = friends.filter(friend => friend.books.includes("Harry Potter")).reduce((acc, friend, index, array) => acc += `${index + 1} ${friend.name}\n`,  `Книга Гарі Потер є в:\n` );

// const names = friends.reduce((acc, friend, index) => {
//     if (friend.books.includes("Harry Potter")) {
//         return acc += `${index + 1} ${friend.name}`;
//     }
//     return acc;
//     console.log(acc);
// }, "Книга Гарі Потер є в:")

// console.log( filteredFriwnds );


// 2.
// const str = 'numbers';

// const strArr = str.split("");

// const obj = strArr.reduce((acc, letter) => {
//     if (letter in acc) {
//         acc[letter] += 1;
//     }else {
//         acc[letter] -1;
//     }
//     return acc;
// }, {});

// console.log(obj);


// 3.

// Потрібно створити функцію яка буде приймати 2 параметри(значення з промпту)
// 1 промпт значення від якої суми робити пошук
// 2 промпт значення до якої суми робити пошук
// Повертає список автомобілів які підпадають під наш пошук


// const cars = [{
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000
// },
// {
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
// }, {
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
// }, {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
// }, {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
// }
// ]

// const minPrice = promt('value from');
// const maxPrice = promt('value to');

// const filteredCars = function(minPrice, maxPrice) {
//   const  carsFind = cars.filter((car) => car.price >= minPrice && car.price <= maxPrice);
//   carsFind.reduce(
//   (acc, { car, type, price }, index) => {
//   return (acc += `${index +1} ${car} ${type}, ціна ${price}\n`)
//   }, 
//   carsFind.length
//    ? `кількість знайдених автомобілів ${carsFind.length}:\n`
//     : 'Вибачте за вашимим пошуком жодного авто не було знайдено');
// };

// console.log(filteredCars(minPrice, maxPrice));


// 4.

// const films = [{
//     "title": "Interceptor",
//     "genre_ids": [
//         28,
//         53,
//         12,
//         18
//     ],
// },
// {
//     "title": "Fantastic Beasts: The Secrets of Dumbledore",
//     "genre_ids": [
//         14,
//         12,
//         28
//     ],
// },
// {
//     "title": "Last Seen Alive",
//     "genre_ids": [
//         28,
//         53
//     ],
// },
// {
//     "title": "Jurassic World Dominion",
//     "genre_ids": [
//         878,
//         28,
//         12,
//         53
//     ],
// },
// ];


// const genres = [{
//     id: 28,
//     name: "Action"
// }, {
//     id: 12,
//     name: "Adventure"
// }, {
//     id: 14,
//     name: "Fantasy"
// }, {
//     id: 878,
//     name: "Science Fiction"
// }, {
//     id: 53,
//     name: "Thriller"
// }, {
//     id: 10752,
//     name: "War"
// }, {
//     id: 37,
//     name: "Western"
// }]

// // 1. Перебрать массив films
// // 2 На каждой итерации получаем доступ к ключу genre_ids и перебираем его
// // 3 Во время перебора genre_ids найти ключ в массиве genres и вернуть имя name
// // 4.В массиве films в каждом объекте создать ключ name с соотв зн - ми.

// // films.forEach((film) => {
// //   const names = film.genre_ids.map((value) => {
// //     const findGenre = genres.find((genre) => genre.id === value);
// //     return findGenre.name;
// //   });
// //   film.genres_names = names;
// // });
// // console.log(films);

// // ----------------------------------------

// films.forEach((film) => {
//     film.genres_names = film.genre_ids.map(
//       (value) => genres.find(({ id }) => id === value).name
//     );
//   });
//   console.log(films);




// 13.08


// const user = {
//     name: 'NAME',
//     cardName: 'private',
//     balance: 2000,


//     getSum() {
//         console.log(this.balance)
//     },

//     addSum(sum) {
//         this.balance += sum;

//         user.getSum.call(this)
//     }
// };

// user.getSum()

// user.addSum()


// const user2 = {
//     name: 'Anna',
//     cardName: 'private',
//     balance: 1500,
// };

// user.getSum.call(user2)

// user.addSum.call(user2, 200)


// const user3 = {
//     name: 'Ivan',
//     cardName: 'private',
//     balance: 3000,
// };

// user.getSum.apply(user3)

// user.addSum.apply(user3, [200]);


// const user4 = {
//     name: 'Anton',
//     cardName: 'private',
//     balance: 4000,
// };

// const foo = user.getSum.bind(user4)

// const foo1 = user.addSum.bind(user4)

// foo1(500)
// foo1(500);
// foo1(500);




// Прототипне наслідування


// String.prototype.hello = function(name){
//     console.log(`hallo my name ${name}`)
// }

// const str = '1, 2, 3'

// str.hello('Ivan')



// const user = {
//     name: 'Ivan',
//     age: 28,
// }

// const admin = Object.create(user)

// console.log(admin.name)

// admin.name = 'Alina'

// console.log(admin.year)




// батько:
// class User {
//     #password
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.#pasword = password;
//     }

//     get password() {
//         console.log(this.#password);
//     }

//     set password() {
//         if(newPassword.length > 7) {
//             this.#password = newPassword;
//             console.log(this.#password);
//         }else {
//             console.log('Довжина пароля має містити Ю 7 символів');
//         }
//     }
// }

// дочірній:

// class Human extends User{
//     constructor(name, email, password, hp, demmage) {
//         super(name, email, password); 
//         this.hp = hp; 
//         this.demmage = demmage;
//     }

//     arrowShot() {
//         console.log('criticall = ${this.demmage * 0.6}')
//     }
// }

// новий об'єкт:

// const user1 = new Warior('Miki', 'miki@gmail.com', 'qwerty123', 1000, 250);
// console.log(user1);

// виклик нового об'єкту:

// user1.password = 'qweqwe'; При виклику юзер1 пасворд ми можемо за допомогою метода  батьківського об'єкту змінити пароль.




// class Warior extends Human {
//     constructor(name, email, password, hp, demmage, armor) {
//         super(name, email, password, hp, demmage);
//         this.armor = armor;
//     }

//     atack() {
//         console.log('atack ${this.demmage}')
//     }

//     block(demmage) {
//         const value = Math.random();
//         if(value > 0.5) {
//             console.log('Attack block')
//         }else {
//             console.log(`Miss atack with ${demmage}`)
//         }

//     }
// }

// class Magic extends Human {
//     constructor(name, email, password, hp, demmage, mana) {
//         super(name, email, password, hp, demmage);
//         this.mana = mana;
//     }

//     spell() {
//         console.log(`Atack with ${this.demmage}, cost 20 ${this.mana}`)
//     }
// }

// const user1 = new Warior('Miki', 'miki@gmail.com', 'qwerty123', 1000, 250);
// console.log(user1);




// // console.log(user1);

// // console.log(user1.name);

// // user1.password;

// // user1.password = 'gaz';

// // console.log(user1);



// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }


// console.log(selectedOptionValue );

// ______________________________________________________________________________

// const instruments = [{
// 	id: 1,
// 	img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
// 	name: 'Молоток',
// 	price: 150
// },
// 	{
// 		id: 4,
// 		img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
// 		name: 'Молоток',
// 		price: 175
// 	},{
// 		id: 2,
// 		img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
// 		name: 'Перфоратор',
// 		price: 3000
// 	}, {
// 		id: 3,
// 		img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
// 		name: 'Рівень',
// 		price: 2000
// 	}]

// const refs = {
// 	basketBtn: document.querySelector('.basket-button'),
// 	favouriteBtn: document.querySelector('.favourite-button'),
// 	list: document.querySelector('.products'),
// 	container: document.querySelector('.container')
// };

// const markup = instruments.reduce((acc, instrument ) => {
// 	return acc + `<li data-id="${instrument .id}" class="item">
//     <img src="${instrument .img}" alt="${instrument .name}" width="200">
//     <h2 class="products__title">${instrument .name}</h2>
//     <p class="products__desc">${instrument .price}</p>
//     <button class="js-add">Basket</button><button class="js-favourite">Favourite</button>
// </li>`
// }, '');

// let basket = [];
// let favourite =[];

// refs.list.insertAdjacentHTML('beforeend', markup);

// refs.list.addEventListener('click', onClick)

// function onClick(event){
// 	if(event.target.classList.contains('js-add')){

// 		const currentCart = event.target.closest('.item')
// 		const currentId = currentCart.dataset.id
 
// 		const obj = instruments.find((element) => element.id === Number(currentId));
// 		const addedItem = basket.find((element) => element.id === Number(currentId));

// 		if(addedItem){
// 			addedItem.qty += 1;
// 			return;
// 		}else{
// 			const objOrder = {date: new Date(), qty: 1, ...obj}
// 			basket.push(objOrder);
// 			return;
// 		}
// 		console.log(basket);
// 	}


// 	if(event.target.classList.contains('js-favourite')){

// 		const currentCart = event.target.closest('.item')
// 		const currentId = currentCart.dataset.id

// 		const obj = instruments.find((element) => element.id === Number(currentId));
// 		const addedItem = basket.find((element) => element.id === Number(currentId));
// 		if(!addedItem){
// 			favourite.push(obj);
// 			event.target.setAttribute('disabled', true)
// 		}
// 		console.log(favourite);
// 	}
// };

// refs.basketBtn.addEventListener('click', onBusketBtnClick);

// function onBusketBtnClick(event) {
// 	createMarkupForBasket();
// }

// refs.container.addEventListener('click', handlerRemoveProduct);

// function handlerRemoveProduct(evt) {
//  	if (evt.target.classList.contains('js-remove')) {
//  		const itemSelect = evt.target.closest('.item').dataset.id;

//  		const indexOfItem = basket.findIndex(elem => elem.id === Number(itemSelect));
// 		 console.log(indexOfItem);

// 		basket.splice(indexOfItem, 1);
// 		createMarkupForBasket();
// 	}
// }

// function createMarkupForBasket() {
//   const basketMarkup = basket.reduce((acc, instrument) => {
// 		return acc + `
// 			<li data-id="${instrument.id}" class="item">
// 			    <img src="${instrument.img}" alt="${instrument.name}" width="200">
// 			    <h2 class="products__title">${instrument.name}</h2>
// 			    <p class="products__desc">${instrument.price}</p>
// 			    <p class="">${instrument.date.getDate()
// 					}</p>
// 			    <p class="">Кількість: ${instrument.qty}</p>
// 			    <button class="js-remove">Remove</button>    
// 		    </li>`

// 	},'');
// 	refs.container.innerHTML = basketMarkup;


// }



// локальне сховище________________________________________________


// Створює новий запис у сховищі у вигляді рядка
// localStorage.setItem('my-data', JSON.stringify({name: 'Mango', age: 2}));

// // повертає значення зі сховища
// const saveData = localStorage.getItem('my-data');
// const parsedData = JSON.parse(saveData);
// console.log(parsedData); 
// import { refs } from "./scripts/refs";

// // функція створення лішки
// const createLi = (text) => `<li data-id='${text}'>${text}</li>`;
    
// // вставка розмітки на екран
//   const addLiToList = (markdown) => {
//     refs.list.insertAdjacentHTML('beforeend', markdown);
// }
  
// const handlerSubmit = (e) => {
//     // забороняєм перезавантажувати сторінку
//   e.preventDefault();            
//   //   дістаємо значення інпуту
//   const value = refs.input.value; 
//    //   value запишеться в text  і передасться в лішку 
//   const liItem = createLi(value);  
//    //   лішка вставиться в ул  
//   addLiToList(liItem);             
//   //   отримали доступ до сторедж
//   const list = localStorage.getItem('list');
//   try { // якщо клас ліст є то парсимо ліст якщо ні то створєм новий []
//     const listData = list ? JSON.parse(list) : [];
//   //   пушимо значення в ул
//     listData.push(value);
//     // перетворюємо в JSON
//     const updatedList = JSON.stringify(listData);
//     // записуємо новий json в сторедж
//     localStorage.setItem('list', updatedList);  
//   }catch (error) {
//     console.log('parsing error');
//   }
//   refs.input.value.reset;  
// }

// refs.form.addEventListener('submit', handlerSubmit);

// // згенерувати дані з локал сторедж на екран при завантаженні сторінки
// const handleMount = () => {
//     const list = localStorage.getItem('list');
//  try {
//     const savedList = JSON.parse(list);
//     const markdown = savedList.reduce((acc, text) => acc +  createLi(text), ""); 
//     addLiToList(markdown);
//  } catch (error) {
//     console.log('parsing error');
//  }
// }
// // запусти фун ю для завантаження сторінки
// addEventListener('DOMContentLoaded', handleMount);





// // setTimeout  ________________________________

// // Оповіщення__________________________
    
// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click, onNotificationClick');

// // при завантаженні сторінки показується оповіщення
// showNotification();



// // при кліку на оповіщення очищаємо сет таймаут і ховаємо оповіщення
// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
// }


// // функція показу оповіщення
// function showNotification() {
//     refs.notification.classList.add('is-visible');

//     timeoutId = setTimeout(() => {
//        console.log('треба закрити алерт');
//        hideNotification();
//     }, NOTIFICATION_DELAY);

// }

// // функція схову оповіщення 
// function hideNotification() {
//     refs.notification.classList.remove('is-visible');
// }



// // setInterval______________________________________
// // Модальне вікно з проханням підписатись_______________

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// //  скільки разів ми попросили підписатись
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if(promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log('зупиняєм інтервал');
//         clearInterval(intervalId);
//         return;
//     }
//   console.log('підпишись на розсилку');
//   promptCounter += 1;
// }, PROMPT_DELAY);



// модуль 10  HTTP HTTPS ЗАПИТИ


fetch('https://pokeapi.co/api/v2/pokemon/2')
.then(response => {
    return response.json();
})
.then(pokem => {
    console.log(pokem);
})
.catch(error => {
    console.log(error);
});





































