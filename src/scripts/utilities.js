const randomPrice = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
}

const randomOption = () => {
  const possibleOptions = ['fire', 'star', 'bolt', 'few', 'medal', 'none'];
  const random = Math.floor(Math.random()*6);
  return possibleOptions[random];
}

const baseURL = (size, page) => {
  //pageSize: max 100
  return `https://api.magicthegathering.io/v1/cards?pageSize=${size};page=${page}`
}

export {
  randomPrice,
  randomOption,
  baseURL
}