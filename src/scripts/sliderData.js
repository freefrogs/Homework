import { randomPrice, baseURL } from './utilities';

const getSliderData = async () => {
  return fetch(baseURL(20,3))
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err))
}

const addSliderProducts = async () => {
  const sliderBox = document.querySelector('.slider__content');

  const allData = await getSliderData();
  const cards = allData.cards;

  let cardsWithImage = []
  cards.forEach(card => {
    if (card.imageUrl) {
      cardsWithImage.push(card);
    }
  });

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
}

export default addSliderProducts;