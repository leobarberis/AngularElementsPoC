import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <toolbar-element *axLazyElement="elementUrl"> </toolbar-element>`,
})
export class HeaderComponent {
  elementUrl = 'http://localhost:8082/main.js';
}
