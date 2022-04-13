import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import { ComponentsModule } from 'src/app/components/components.module';
import {HistoriaPage} from "../historia/historia.page";
import {HistoriaPageModule} from "../historia/historia.module";

@NgModule({
  entryComponents:[
    HistoriaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaPageRoutingModule,
    ComponentsModule,
    HistoriaPageModule
  ],
  declarations: [CategoriaPage]
})
export class CategoriaPageModule {}
