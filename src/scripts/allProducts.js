const allProducts = () => {
  const container = document.querySelector('.products__container');
  const btn = document.querySelector('.products__button--all');

  const newProducts = [
    {
      img: 'https://picsum.photos/id/1074/309/390',
      option: 'fire',
      name: 'Very nice Cat',
      price: '$129.00'
    },
    {
      img: 'https://picsum.photos/id/1069/309/390',
      option: 'star',
      name: 'Great dog',
      price: '$59.00'
    },
    {
      img: 'https://picsum.photos/id/237/309/390',
      option: 'bolt',
      name: 'Beatiful something',
      price: '$29.00'
    },
    {
      img: 'https://picsum.photos/id/146/309/390',
      option: 'few',
      name: 'Pretty beetle',
      price: '$228.00'
    },
    {
      img: 'https://picsum.photos/id/139/309/390',
      option: 'medal',
      name: 'Very nice Cat',
      price: '$129.00'
    },
    {
      img: 'https://picsum.photos/id/133/309/390',
      name: 'Great dog',
      price: '$59.00'
    },
    {
      img: 'https://picsum.photos/id/1084/309/390',
      option: 'bolt',
      name: 'Beatiful something',
      price: '$29.00'
    },
    {
      img: 'https://picsum.photos/id/1003/309/390',
      option: 'few',
      name: 'Pretty beetle',
      price: '$228.00'
    }
  ]

  function getOption(option) {
    let optionBox = '';

    switch(option) {
      case 'fire':
        optionBox = '<p class="products__option"><img class="products__icon" src="./assets/fire.png" alt="fire icon">hot</p>';
        break;
      case 'star':
        optionBox = '<p class="products__option"><img class="products__icon" src="./assets/star.png" alt="star icon">Top rate</p>';
        break;
      case 'bolt':
        optionBox = '<p class="products__option"><img class="products__icon" src="./assets/bolt.png" alt="bolt icon">new</p>';
        break;
      case 'medal':
        optionBox = '<p class="products__option"><img class="products__icon" src="./assets/medal.png" alt="badge icon">best seller</p>';
        break;
      case 'few':
        optionBox = '<p class="products__option"><img class="products__icon" src="./assets/few.png" alt="last items icon">Only a few left</p>';
        break;
      default:
        break;
    }
    return optionBox;
  }

  function showProducts() {
    const oldProducts = container.innerHTML;

    let products = oldProducts;

    newProducts.forEach(product => {
      const optionBox = getOption(product.option);
      products += `
        <div class="products__card">
          <img class="products__image" src=${product.img} alt="product visualization">
          ${optionBox}
          <p class="products__name">${product.name}</p>
          <p class="products__price">${product.price}</p>
        </div>
      `
    });

    container.innerHTML = products;
    btn.style.display = 'none';
  };

  btn.addEventListener('click', showProducts);
}

export default allProducts;


      
      
      
      
      