const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let counter = 0;
const size = images[0].clientWidth;

window.addEventListener('resize', () => {
  // Update the size on window resize
  size = images[0].clientWidth;
  carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextButton.addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  counter++;
  carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
