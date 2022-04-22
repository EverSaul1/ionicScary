import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {LoginPage} from "../../pages/auth/login/login.page";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
})
export class ConfiguracionComponent implements OnInit {

  constructor( private modalControl: ModalController) { }

  ngOnInit() {}


  async modalUsuario(){
    const modal = await this.modalControl.create({
      component: LoginPage,
      componentProps: {

      }
    })
    await modal.present()

  }

}
