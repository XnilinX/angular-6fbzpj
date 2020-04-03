import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RicoveratiListComponent } from './ricoverati-list/ricoverati-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RicoveratiListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
