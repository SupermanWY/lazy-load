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

  addSubject(sub) {
    this.subjects.push(sub)
  }

  removeSubject(sub) {
    const idx = this.subjects.indexOf(sub)
    if (idx > -1) {
      this.subjects.splice(idx, 1)
    }
  }
}