// модуль 6
// задача 1

// const catEl = document.querySelectorAll('.item');
// console.log('Number of categories:', catEl.length);

// catEl.forEach(categories => {

//     console.log("Category:", categories.firstElementChild.textContent);
//     console.log("Elements:", categories.lastElementChild.children.length);
   
// });


// задача 2

// const ingredients = [
//     'Potatoes',
//     'Mushrooms',
//     'Garlic',
//     'Tomatos',
//     'Herbs',
//     'Condiments',
//   ];
  
//   const ingredientsEl = document.querySelector('ul');
//   console.log(ingredientsEl);
  
//   const itemEls = ingredients.map(ingredient => {
//     const  itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient; 
  
//     return itemEl;
// })

  
// ingredientsEl.append(...itemEls);

  
// задача 3

// const images = [
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
  
  
//   const galleryEl = document.querySelector('.gallery');
//   console.log(galleryEl);
   
  
//   const elements = images.map((image) => `<li class="gallery__item"><img class"gallery__img" src="${image.url} alt="${image.alt}" width="320" height="320"></li>`);
  
// galleryEl.insertAdjacentHTML("afterbegin", elements.join(""));


// задача 4 

// const refs = {
//     btnDecrement: document.querySelector('button[data-action="decrement"]'),
//     valueEl:  document.querySelector('#value'),
//     btnIncrement: document.querySelector('button[data-action="increment"]'),
//   };
  
//   refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
//   refs.btnIncrement.addEventListener('click', onBtnIncrementClick);
  
//   let counterValue = 0;
  
//   function onBtnDecrementClick() {
//     counterValue -= 1;
//     refs.valueEl.textContent = counterValue;
//   }
  
//   function onBtnIncrementClick() {
//     counterValue -= 1;
//     refs.valueEl.textContent = counterValue;
//   }
  
//   // const btnDecrement = document.querySelector('[data-action="decrement"]');
//   // const valueEl =  document.querySelector('#value');
//   // const btnIncrement = document.querySelector('[data-action="increment"]');
  
//   // btnDecrement.addEventListener('click', onBtnDecrementClick);
//   // btnIncrement.addEventListener('click', onBtnIncrementClick);
  
//   // let counterValue = 0;
  
  
//   // function onBtnDecrementClick() {
//   //   counterValue -= 1;
//   //   valueEl.textContent = counterValue;
//   // }
  
  
//   // function onBtnIncrementClick() {
//   //   counterValue -= 1;
//   //   valueEl.textContent = counterValue;
// // }



// задача 5

// const inputEl = document.querySelector('#name-input');
// const spanEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', onInputElInput);

// function onInputElInput(event) {
//     spanEl.textContent = event.currentTarget.value;            

//    if(event.currentTarget.value === "") {
//       spanEl.textContent = "Anonymous";
//    }
// }



// задача 6

// const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

// inputEl.addEventListener('blur', onBlur);

// function onBlur (event) {
//   const input = event.currentTarget;
//   const inputLength = Number(input.dataset.length);

//   if(input.value.length === inputLength) {
//     input.classList.remove('invalid');
//     input.classList.add('valid');
//   }else {
//     input.classList.remove('valid');
//     input.classList.add('invalid');
//   }
// }



// задача  7

// const inputEl = document.querySelector('#font-size-control');
// const spanEl = document.querySelector('#text');
// console.log(inputEl);
// console.log(spanEl);

// inputEl.addEventListener('input', onInput );

// spanEl.style.fontSize = inputEl.value + 'px';

// function onInput () {
//     spanEl.style.fontSize = inputEl.value + 'px';
// }


// задача 8 


// const form = document.querySelector('.login-form');
// console.log(form);

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//   event.preventDefault();

//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//    window.alert('Всі поля мають бути заповнені');
//   }else{
//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
//   }
// }

// var 2

// const form = document.querySelector('.login-form');
// console.log(form);

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//   event.preventDefault();

//   if (email.value === "" || password.value === "") {
//     window.alert('Всі поля мають бути заповнені');
 
//   }else{
//     const formElements = event.currentTarget.elements;

        // const email = event.currentTarget.elements.email.value;
       // const pass = event.currentTarget.elements.password.value;

//     const mail =  formElements.email.value;
//     const password = formElements.password.value;
  
//     const formData = {
//       mail,
//       password,
//     };
//   }

//   console.log(formData);
  
// }


// задача 9 

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
  
//   const buttonRef = document.querySelector('.change-color');
//   const spanEl = document.querySelector('.color');
  
//   buttonRef.addEventListener('click', () => {
//     spanEl.textContent = getRandomHexColor();
//     document.body.setAttribute(
//       'style',
//       'background-color: ' + spanEl.textContent
//     );
// });


// задача 10





  






  