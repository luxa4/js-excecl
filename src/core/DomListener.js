export class DomListener {
  constructor($root, listeners =[]) {
    if (!$root) {
      throw new Error('$root dont provide for DomListener');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  // Этот метод должен вызываться после такого как отрисован DOM
  initDOMListener() {
    console.log(this.listeners)
  }

  removeDOMListener() {}
}
