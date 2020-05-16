import slider from './slider'
import scrollTop from './scrollTop'
import allProducts from './allProducts'
import getFooterYear from './footerData'
import addSliderProducts from './sliderData'
import addMainProducts from './productsData'

const startFunction = () => {
  addSliderProducts();
  addMainProducts();
  slider();
  scrollTop();
  allProducts();
  getFooterYear();
};

export default startFunction;