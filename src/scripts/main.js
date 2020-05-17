import slider from './slider'
import scrollTop from './scrollTop'
import addProducts from './addProducts'
import getFooterYear from './footerData'
import addSliderProducts from './sliderData'
import addMainProducts from './productsData'
import addCollections from './collectionsData'

const startFunction = () => {
  addSliderProducts();
  addMainProducts();
  addCollections();
  slider();
  scrollTop();
  addProducts();
  getFooterYear();
};

export default startFunction;