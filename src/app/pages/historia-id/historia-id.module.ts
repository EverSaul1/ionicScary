import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaIdPageRoutingModule } from './historia-id-routing.module';

import { HistoriaIdPage } from './historia-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaIdPageRoutingModule
  ],
  declarations: [HistoriaIdPage]
})
export class HistoriaIdPageModule {}
