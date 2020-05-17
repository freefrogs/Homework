import slider from './slider'
import scrollTop from './scrollTop'
import addProducts from './addProducts'
import getFooterYear from './footerData'
import addSliderProducts from './sliderData'
import addMainProducts from './productsData'

const startFunction = () => {
  addSliderProducts();
  addMainProducts();
  slider();
  scrollTop();
  addProducts();
  getFooterYear();
};

export default startFunction;