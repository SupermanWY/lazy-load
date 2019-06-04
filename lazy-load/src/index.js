import LazyLoad from './lazy-load'
import Subject from './subject'

const install = (Vue, options) => {
  const lazyLoad = new LazyLoad(options)

  Vue.directive('lazy', {
    bind: lazyLoad.add.bind(lazyLoad),
    update: lazyLoad.update.bind(lazyLoad),
    unbind: lazyLoad.unbind.bind(lazyLoad)
  })
}

export default { install }