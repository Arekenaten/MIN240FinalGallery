let lazyImages = [...document.querySelectorAll('.lazyLoad')];
let inAdvance = 300;

function lazyLoad() {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onload = () => image.classList.add('loaded');
    }
  });
}

lazyLoad();

window.addEventListener('scroll', (lazyLoad));
window.addEventListener('resize', (lazyLoad));