const baseURL = (size, page) => {
  //size: max 100
  return `https://api.magicthegathering.io/v1/cards?pageSize=${size};page=${page}`
}

const getData = async (size, page, box) => {
  //box: slider, products, collections
  return fetch(baseURL(size, page))
    .then((res) => {
      if (!res.ok) {
        const loaderImage = document.querySelector(`.loader__image--${box}`);
        loaderImage.style.display = 'none';
        const loaderText = document.querySelector(`.loader__text--${box}`);
        loaderText.innerText = 'Something went wrong, please try again later';
        loaderText.style.fontSize = '24px';
        return
      }
      return res.json()
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

const getCardsWithImage = async (size, page, box) => {
  const allData = await getData(size, page, box);

  if (!allData) {
    return 
  }

  const cards = allData.cards;

  let cardsWithImage = []
  cards.forEach(card => {
    if (card.imageUrl) {
      cardsWithImage.push(card);
    }
  });

  return cardsWithImage;
}

export default getCardsWithImage;