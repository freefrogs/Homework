const baseURL = (size, page) => {
  //pageSize: max 100
  return `https://api.magicthegathering.io/v1/cards?pageSize=${size};page=${page}`
}

const getData = async (size, page) => {
  return fetch(baseURL(size,page))
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err))
}

const getCardsWithImage = async (size, page) => {
  const allData = await getData(size, page);
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