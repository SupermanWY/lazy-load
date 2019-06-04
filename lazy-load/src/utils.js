export function isPlainObject(obj) {
  try {
    return Object.getPrototypeOf(obj) === Object.prototype
  } catch(e) {
    return false
  }
}

export function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}