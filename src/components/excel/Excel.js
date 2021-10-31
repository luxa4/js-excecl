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
      console.log(component.toHTML())
      console.log($el.innerHTML)
      $root.append($el);
      console.log($root)
      return component;
    })

    return $root;
  }

  render() {
    this.$el.append(this.getRoot())
    console.log(`Render`, this.$el)

    this.components.forEach(component => component.init())
  }
}
