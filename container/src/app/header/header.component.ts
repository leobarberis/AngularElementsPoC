import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <toolbar-element *axLazyElement="elementUrl"> </toolbar-element>`,
})
export class HeaderComponent {
  elementUrl = 'https://cdn.jsdelivr.net/gh/leobarberis/TableWebComponentSharedLibraries/toolbar.js';
}
