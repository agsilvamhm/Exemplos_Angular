import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeletorComponent } from './components/util/seletor/seletor.component';
import { OrderModule } from 'ngx-order-pipe';
import { Seletorv2Component } from './components/util/seletorv2/seletorv2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeletorComponent,
    Seletorv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
