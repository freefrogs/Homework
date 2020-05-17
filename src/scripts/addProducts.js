import { randomPrice, randomOption, getOption } from './utilities';
import getCardsWithImage from './fetchingData';

const addProducts = () => {
  const button = document.querySelector('.products__button--all');
  let page = 10;
  
  const showProducts = async () => {
    const productsBox = document.querySelector('.products__container');
    const productsLoader = document.querySelector('.loader--products');
    
    button.style.display = 'none';
    productsLoader.style.display = 'block';

    if (page >= 311) {
      const container = document.querySelector('.products');
      const endOfProducts = document.createElement('div');
      endOfProducts.classList.add('products__card--last');
      endOfProducts.innerHTML = '<p>You have reached the end of the products</p>'
      container.appendChild(endOfProducts);
      productsLoader.style.display = 'none';
      return
    }

    const cardsWithImage = await getCardsWithImage(8,page,'products');

    if (!cardsWithImage) {
      return
    }
    
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

    productsLoader.style.display = 'none';
    button.style.display = 'flex';
  };

  button.addEventListener('click', showProducts);
}

export default addProducts;


      
      
      
      
      