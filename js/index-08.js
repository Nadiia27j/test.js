задача 1

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGalleryImg(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImg);

console.log(createGalleryImg(galleryItems));

function createGalleryImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
           />
           </a>
        </div>
      `;
    }).join("");
};


new SimpleLightbox ('.gallery a', { 
  nav: true,
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

SimpleLightbox();
 

задача 2



import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

// Ініціалізація плеєра__________________

const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));
 
function onPlay(timeupdate) {
    let pause = timeupdate.seconds;
    console.log(pause);
    localStorage.setItem("videoplayer-current-time", pause);
}


const currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
});


// const currentTime = localStorage.getItem('videoplayer-current-time');
// console.log(currentTime);
// player.setCurrentTime(currentTime).then(function (pause) {
//    // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });



задача 3 


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populateInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// записується у локал сторедж {} з полями
function onFormInput(e) {
   e.preventDefault();
  formData[e.target.name] = e.target.value;

   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
 
// під час сабміту очищається локал і поля, і в консоль виодь {} з полями.
function onFormSubmit(e) {
    e.preventDefault();
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedMessage);

    if (parseMessage) {
        console.log(parseMessage);
    }

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// під час завантаження сторінки перевір стан локал ,якщо є дані заповни ними поля форми
function populateInput() {
 const savedMessage = localStorage.getItem(STORAGE_KEY);
 const parseMessage = JSON.parse(savedMessage);
 
 if (parseMessage) {
    formData = parseMessage || '';
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}


