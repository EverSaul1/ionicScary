import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CategoriaServicesService} from "../../services/categoria/categoria-services.service";
import {Historia} from "../../interface/historia.interface";
import {HistoriaIdPage} from "../historia-id/historia-id.page";

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  historia: Historia[] = [];
  search = null;

  textoBuscar = ''

  //@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  @Input() idCategory;
  @Input() nameCategory;

  constructor(
    private modalControl: ModalController,
    private historiaService: CategoriaServicesService
  ) { }

  ngOnInit() {
    this.traerHistorias();
    //this.getNComentario();

    console.log(this.search);
  }

  cerrarModal(){
    this.modalControl.dismiss();
  }


  traerHistorias(){

    //const items =  this.txtBuscar.nativeElement.value;
    this.historiaService.getHistorias(this.idCategory).subscribe(res => {
      this.historia = res;
    });
  }

  async ingresarHistoria(e: any){

    const modal = await this.modalControl.create({
      component: HistoriaIdPage,
      componentProps: {
        idHistoria: e._id,
        items: e
      }
    });
    await modal.present();

  }
  doRefresh(e){
    setTimeout(() =>{
      e.target.complete();
      document.getElementById('hola').style.backgroundColor = 'red';
      this.traerHistorias();
    }, 600)
  }

  buscar(event: any) {

    this.textoBuscar = event.detail.value;

  }

  /*getNComentario(){
    this.historiaService.getNComentario().subscribe(res => {
      console.log(res)

    })
     }*/




}
