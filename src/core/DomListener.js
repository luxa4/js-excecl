import {getCapitalize} from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('$root dont provide for DomListener');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  // Этот метод должен вызываться после такого как отрисован DOM
  initDOMListener() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);

      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${this.name} Component`);
      }
      console.log(method)

      // Dom element
      this.$root.on(listener, this[method].bind(this))
    });
  }

  removeDOMListener() {
    // realize
  }
}


// input => onInput
function getMethodName(eventName) {
  return 'on' + getCapitalize(eventName);
}
