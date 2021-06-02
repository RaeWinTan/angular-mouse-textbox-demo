import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {AngularMouseTextboxModule} from "angular-mouse-textbox";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AngularMouseTextboxModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
