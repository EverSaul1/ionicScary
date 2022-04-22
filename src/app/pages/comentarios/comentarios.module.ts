import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosPageRoutingModule } from './comentarios-routing.module';

import { ComentariosPage } from './comentarios.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComentariosPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ComentariosPage]
})
export class ComentariosPageModule {}
