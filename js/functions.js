// 3. al click su avanti
//     -togliere la classe active all'indice corrente
//     -incementa l'indice
//     -aggiungi classe active al nuovo indice corrente

function changeActiveItem(newIndex) {
    const items = document.querySelectorAll('.my-carousel-item');
    const thumbnails = document.querySelectorAll('.my-thumbnail');

    items.forEach(item => item.classList.remove('active'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    items[newIndex].classList.add('active');
    thumbnails[newIndex].classList.add('active');
}


function setupControls() {
    const prevButton = document.querySelector('.my-previous');
    const nextButton = document.querySelector('.my-next');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        // condizione di ritorno dal primo all'ultimo elemento, impostandolo sull'ultimo elemento se sono al 1
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        changeActiveItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        changeActiveItem(currentIndex);
    });
}

