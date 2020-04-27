const getFooterYear = () => {
  const dataBox = document.querySelector('.footer__data');
  const today = new Date();
  const year = today.getFullYear()
  
  dataBox.innerText = year;
}

export default getFooterYear;