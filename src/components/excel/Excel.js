import {$} from '../../core/Dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map( (Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      console.log(`Добавляем в иннер`, component.toHTML())
      console.log(`Элемент с добавлением`, $el)
      $root.append($el);
      console.log(`Добавили в Excel`, $root)
      return component;
    })

    return $root;
  }

  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
  }
}
