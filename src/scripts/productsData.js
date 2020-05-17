import { randomPrice, randomOption, getOption } from './utilities';
import getCardsWithImage from './fetchingData';

const addMainProducts = async () => {
  const productsBox = document.querySelector('.products__container');
  const button = document.querySelector('.products__box');
  const productsLoader = document.querySelector('.loader--products');

  const cardsWithImage = await getCardsWithImage(16,4);

  const finalCards = cardsWithImage.slice(0,8);

  finalCards.forEach((el) => {
    const product = document.createElement('div')
    product.classList.add('products__card');
    const price = randomPrice(10,300);
    const option = randomOption();
    const optionBox = getOption(option);

    product.innerHTML = `
      <img class="products__image" src=${el.imageUrl} alt="product visualization">
      ${optionBox}
      <p class="products__name">${el.name}</p>
      <p class="products__price">$${price}</p>
    `

    productsBox.appendChild(product);
  });

  productsLoader.style.display = 'none';
  button.style.display = 'flex';
}

export default addMainProducts;