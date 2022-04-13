import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaPageRoutingModule } from './historia-routing.module';

import { HistoriaPage } from './historia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoriaPage]
})
export class HistoriaPageModule {}
