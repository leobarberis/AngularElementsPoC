import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetComponent } from './widget/widget.component';
import { createCustomElement } from '@angular/elements';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [WidgetComponent],
  imports: [BrowserModule, MatTableModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(WidgetComponent, {
      injector: this.injector,
    });
    customElements.define('widget-element', el);
  }
}
