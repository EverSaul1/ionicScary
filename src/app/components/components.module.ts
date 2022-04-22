import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PopoverComponent } from './popover/popover.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    ConfiguracionComponent,
    PopoverComponent
  ],
  exports:[
    ConfiguracionComponent,
    PopoverComponent],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }
