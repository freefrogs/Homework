const randomPrice = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
}

const randomOption = () => {
  const possibleOptions = ['fire', 'star', 'bolt', 'few', 'medal', 'none'];
  const random = Math.floor(Math.random()*6);
  return possibleOptions[random];
}

const getOption = option => {
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

export {
  randomPrice,
  randomOption,
  getOption
}