import { isObject } from './utils'

const defaultOptios = {
  throttle: 200,
  loading: null,
  error: null,
  preLoad: 1.3
}
class LazyLoad {
  constructor(options = {}) {
    this.options = Object.assign(defaultOptios, options)
    this.subjects = []

    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', () => {}, {
      passive: true
    })
  }

  handleScroll() {
    if (!this.subjects.length) {
      return
    }

    const first = this.subjects[0]
    console.log(first.getBoundingClientRect())
  }

  add(el, binding) {
    console.log(el, 'bind dir')
    let config = binding.value
    if (!isObject(config)) {
       config = {
        src: config
      }
    }
    config.loading = this.options.loading
    config.error = this.options.error
    config.preLoad = this.options.preLoad

    this.subjects.push({
      el,
      config
    })
  }

  update(el) {
    console.log(el, 'update dir')
  }

  unbind(el) {
    console.log(el, 'unbind dir')
  }

  removeSubject(sub) {
    const idx = this.subjects.indexOf(sub)
    if (idx > -1) {
      this.subjects.splice(idx, 1)
    }
  }
}

export default LazyLoad