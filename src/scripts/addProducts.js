import { randomPrice, randomOption, getOption } from './utilities';
import getCardsWithImage from './fetchingData';

const addProducts = () => {
  const button = document.querySelector('.products__button--all');
  let page = 10;
  
  const showProducts = async () => {
    const productsBox = document.querySelector('.products__container');
    
    button.style.display = 'none';

    if (page >= 311) {
      const container = document.querySelector('.products');
      const endOfProducts = document.createElement('div');
      endOfProducts.classList.add('products__card--last');
      endOfProducts.innerHTML = '<p>You have reached the end of the products</p>'
      container.appendChild(endOfProducts);
      return
    }

    const cardsWithImage = await getCardsWithImage(8,page);
    const finalCards = cardsWithImage.slice(0,4);

    page++;
  
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

    button.style.display = 'flex';
  };

  button.addEventListener('click', showProducts);
}

export default addProducts;


      
      
      
      
      