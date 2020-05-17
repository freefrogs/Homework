import { randomPrice } from './utilities';
import getCardsWithImage from './fetchingData';


const addSliderProducts = async () => {
  const sliderBox = document.querySelector('.slider__content');
  const sliderLoader = document.querySelector('.loader--slider');
  const arrowNext = document.querySelector('.slider__button--next');

  const cardsWithImage = await getCardsWithImage(20,1,'slider');

  if (!cardsWithImage) {
    return
  }

  const finalCards = cardsWithImage.slice(0,10);

  finalCards.forEach((el) => {
    const slide = document.createElement('div')
    slide.classList.add('slider__item');
    const minPrice = randomPrice(10,40);
    const maxPrice = randomPrice(40,100);
    slide.innerHTML = `
      <img class="slider__item__img" src=${el.imageUrl} alt="product">
      <p class="slider__item__desc">
        <span class="slider__item__name slider__item--transition">${el.name}</span>
        <br>
        <span class="slider__item__price slider__item--transition">$${minPrice} - $${maxPrice}</span>
      </p>
      <div class="slider__item__overlay slider__item--transition"></div>
    `
    sliderBox.appendChild(slide);
  });

  arrowNext.style.display = 'block';
  sliderLoader.style.display = 'none';
}

export default addSliderProducts;