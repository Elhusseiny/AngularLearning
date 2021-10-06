import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildElementComponent } from './child-element/child-element.component';
import { CustomDirective } from './CustomDirectives/CustomDirective';

@NgModule({
  declarations: [
    AppComponent,
    ChildElementComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
