// задача 1

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// // 1. Створення і рендер розмітки__________________

// const galleryContainer = document.querySelector('.gallery');
// const galleryImg = createGalleryImg(galleryItems);

// galleryContainer.insertAdjacentHTML("beforeend", galleryImg);

// console.log(createGalleryImg(galleryItems));

// function createGalleryImg(galleryItems) {
//     return galleryItems.map(({preview, original, description}) => {
//         return `
//         <div class="gallery__item">
//            <a class="gallery__link" href="${original}">
//            <img
//            class="gallery__image"
//            src="${preview}"
//            data-source="${original}"
//            alt="${description}"
//            />
//            </a>
//         </div>
//       `;
//     }).join("");
// };

// // Делегування і отримання url_______________

// galleryContainer.addEventListener('click', onImageClick);

// function onImageClick(e) {
//  const isImg = e.target.classList.contains('gallery__image');
//  e.preventDefault();
//   if(!isImg) {
//     return;
//   }

//   const imgEl = document.querySelector('.gallery__link');
//   imgEl.href = e.target.dataset.source;

//  // //   Створює екземпляр  basicLightbox_______________

//   const instance = basicLightbox.create(`
//     <img class="modal__image" src="assets/images/image.png" width="800" height="600">
//     `);

//   instance.show();

//   const modalEl = document.querySelector('.modal__image');
//   modalEl.src = e.target.dataset.source;

//   // Закриття модалки по escape__________________________

//   window.addEventListener('keydown', closeModalEsc)

//   function closeModalEsc(e) {

//     if(e.key === "Escape") {
//       instance.close();

//       window.removeEventListener('keydown', closeModalEsc);
//     }
//   }
// };

// //   const instance = basicLightbox.create(`
// //     <img class="modal__image" src="assets/images/image.png" width="800" height="600">
// //     `, {
// // onShow(){
// // document.addEventListener('keydown', closeModalEsc)
// // },
// // onClose(){
// // document.removeEventListener('keydown', closeModalEsc)
// // }
// // });

// задача 2

// import { galleryItems } from './gallery-items.js';

// // Change code below this line

// console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');
// const galleryImg = createGalleryImg(galleryItems);

// galleryContainer.insertAdjacentHTML("beforeend", galleryImg);

// console.log(createGalleryImg(galleryItems));

// function createGalleryImg(galleryItems) {
//     return galleryItems.map(({preview, original, description}) => {
//         return `
//         <div class="gallery__item">
//            <a class="gallery__link" href="${original}">
//            <img
//            class="gallery__image"
//            src="${preview}"
//            data-source="${original}"
//            alt="${description}"
//            />
//            </a>
//         </div>
//       `;
//     }).join("");
// };

// new SimpleLightbox ('.gallery a', {
//   nav: true,
//   caption: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// SimpleLightbox();
