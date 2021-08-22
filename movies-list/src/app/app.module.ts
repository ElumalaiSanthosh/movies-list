import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

const BASE_MODULES = [AppRoutingModule, BrowserModule, BrowserAnimationsModule];

const NGRX_MODULES = [];

const FEATURE_MODULES = [HeaderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...BASE_MODULES, ...NGRX_MODULES, ...FEATURE_MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
