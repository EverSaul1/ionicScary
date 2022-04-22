import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsPageModule } from './shared/tabs/tabs.module';

import  localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import {PipesModule} from "./pipes/pipes.module";


registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsPageModule,
    HttpClientModule,
    PipesModule


  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
