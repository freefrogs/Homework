const getFooterYear = () => {
  const dateBox = document.querySelector('.footer__date');
  const today = new Date();
  const year = today.getFullYear()
  
  dateBox.innerText = year;
}

export default getFooterYear;