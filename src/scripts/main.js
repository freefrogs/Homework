import slider from './slider'
import scrollTop from './scrollTop'
import allProducts from './allProducts'
import getFooterYear from './footerData'
import addSliderProducts from './sliderData'

const startFunction = () => {
  addSliderProducts();
  slider();
  scrollTop();
  allProducts();
  getFooterYear();
};

export default startFunction;