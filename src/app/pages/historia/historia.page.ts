import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CategoriaServicesService} from "../../services/categoria/categoria-services.service";
import {Historia} from "../../interface/historia.interface";

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  @Input() idCategory;
  @Input() nameCategory;

  constructor(
    private modalControl: ModalController,
    private historiaService: CategoriaServicesService
  ) { }

  ngOnInit() {
    this.traerHistorias();
  }

  cerrarModal(){
    this.modalControl.dismiss();
  }

  traerHistorias(){
    let category = this.idCategory;
    const params = {
      idCat: this.idCategory,
      nameHist: this.nameCategory
    };
    this.historiaService.getHistorias(this.idCategory).subscribe(res => {
      console.log(res)
    })
  }

}
