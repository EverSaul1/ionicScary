import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
  declarations: [
    ConfiguracionComponent,
    PopoverComponent
  ],
  exports:[
    ConfiguracionComponent,
    PopoverComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
