import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root) {
    super($root, {
      name: 'Header'
    });
  }


  toHTML() {
    return `
      <input class="input" type="text" value="Новая таблица"/>
      <div>
          <div class="button">
              <span class="material-icons">
                  delete
              </span>
          </div>
          <div class="button">
              <span class="material-icons">
                  exit_to_app
              </span>
          </div>
      </div>
    `;
  }
}
