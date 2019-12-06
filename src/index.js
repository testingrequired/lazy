const isFunction = require("./isFunction");

/**
 * Wrap an object to make its methods lazily evaluate.
 */
class Lazy {
  constructor(obj) {
    return new Proxy(this, {
      get(_, prop) {
        const value = obj[prop];
        return isFunction(value) ? Lazy.fn(value) : value;
      }
    });
  }

  /**
   * Create lazy object
   * @param {*} obj Object to wrap
   */
  static of(obj) {
    return new Lazy(obj);
  }

  /**
   * Create lazy function
   * @param {*} fn Function to wrap
   */
  static fn(fn) {
    return (...args) => () => fn.call(null, ...args);
  }
}

module.exports = Lazy;
