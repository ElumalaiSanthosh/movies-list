import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MoviePageModule } from './movie-page/movie-page.module';
import { effects } from './state/effects';
import { reducers } from './state/reducers';

const BASE_MODULES = [AppRoutingModule, BrowserModule, BrowserAnimationsModule];

const NGRX_MODULES = [
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot(effects),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];

const FEATURE_MODULES = [HeaderModule,MoviePageModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...BASE_MODULES, ...NGRX_MODULES, ...FEATURE_MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
