import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ConfiguracionComponent } from '../configuracion/configuracion.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ConfiguracionComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      animated:true,
      mode: "ios"
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
