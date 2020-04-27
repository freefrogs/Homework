import slider from './slider'
import scrollTop from './scrollTop'
import allProducts from './allProducts'
import getFooterYear from './footerData'

const startFunction = () => {
  slider();
  scrollTop();
  allProducts();
  getFooterYear();
};

export default startFunction;