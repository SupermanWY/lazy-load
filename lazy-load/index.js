import LazyLoad from './src/lazy-load'
import Subject from './src/subject'

const install = (Vue, options) => {
  const lazyLoad = new LazyLoad(options)

  Vue.directive('lazy', {
    bind(el, binding) {
      el.sub = new Subject(el, binding.value)
      el.sub
    },

    unbind(el) {

    }
  })
}

function makeBindAndUnbind(lazyLoad) {
  const bind = (el, binding) => {
    this.subject = new Subject(el, binding.value)
    lazyLoad.addSubject(subject)
  }

  const unbind = () => {
    lazyLoad.removeSubject(this.subject)
  }

  return { bind, unbind }
}