const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// 1. Stampare tutte le immagini in pagina tramite js

const carouselImagesDiv = document.querySelector('.my-carousel-images');
const thumbnailsDiv = document.querySelector('.my-thumbnails');

images.forEach((item, index) => {
    console.log(item);
    const carouselItem = document.createElement('div');
    // 2. imposta lo stato di partenza
    carouselItem.className = 'my-carousel-item' + (index === 0 ? ' active' : '');
    carouselItem.innerHTML = `
        <img class="img-fluid" src="${item.image}" alt="${item.title}">
        <div class="item-description px-3">
            <h2>${item.title}</h2>
            <p>${item.text}</p>
        </div>
    `;
    carouselImagesDiv.appendChild(carouselItem);

    const thumbnailItem = document.createElement('img');
    thumbnailItem.className = 'img-fluid my-thumbnail' + (index === 0 ? ' active' : '');
    thumbnailItem.src = item.image;
    thumbnailItem.alt = `Thumbnail of ${item.title}`;
    thumbnailsDiv.appendChild(thumbnailItem);
});

// richiamo la funzione
setupControls();



