import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, WidgetComponent, HeaderComponent],
  imports: [BrowserModule, LazyElementsModule, NoopAnimationsModule, MatIconModule, MatToolbarModule, MatButtonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-root', el);
  }
}
