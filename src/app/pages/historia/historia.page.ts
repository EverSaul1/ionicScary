import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  @Input() idCategory;
  @Input() nameCategory;

  constructor(private modalControl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalControl.dismiss();
  }

}
