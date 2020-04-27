const slider = () => {
  const gap = 30;

  const carousel = document.querySelector('.slider__body'),
    content = document.querySelector('.slider__content'),
    next = document.querySelector('.slider__button--next'),
    prev = document.querySelector('.slider__button--prev');

  next.addEventListener('click', e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = 'block';
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = 'none';
    }
  });
  prev.addEventListener('click', e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = 'none';
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = 'block';
    }
  });

  let width = carousel.offsetWidth;
  window.addEventListener('resize', e => (width = carousel.offsetWidth));
}

export default slider;