import Carousel from './carousel.vue'

Carousel.install = function (Vue) {
  Vue.components(Carousel.name, Carousel)
}

export default Carousel
