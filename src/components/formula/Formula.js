import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHTML() {
    return '<h1>Formula</h1>';
  }

  onInput(event) {
    console.log(`Formula: OnInput`, event.textContent.trim())
  }

  onClick(event) {
    console.log(`Formula: click`, event)
  }
}
