import getCardsWithImage from './fetchingData';

const addCollections = async () => {
  const productsBox = document.querySelector('.collections__container');
  const collectionsLoader = document.querySelector('.loader--collections');

  const cardsWithImage = await getCardsWithImage(8,5);
  const finalCards = cardsWithImage.slice(0,4);

  console.log(finalCards);

  let card = 1

  finalCards.forEach((el) => {
    const product = document.createElement('div')
    product.classList = `collections__card collections__card--${card}`;
    product.style.backgroundImage = `url(${el.imageUrl})`;

    product.innerHTML = `
      <div class="collections__box">
        <p class="collections__name">${el.name}</p>
        <a class="collections__link" href="#">Shop now</a>
      </div>
    `
    
    productsBox.appendChild(product);
    card++
  });

  collectionsLoader.style.display = 'none';
}

export default addCollections;