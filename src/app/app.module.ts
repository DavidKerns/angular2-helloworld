import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyNewNestedComponent } from './my-new-nested/my-new-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyNewNestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
