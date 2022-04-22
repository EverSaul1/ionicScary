import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CategoriaServicesService} from "../../services/categoria/categoria-services.service";
import {Comments} from "../../interface/comment-interface";
import {ComentariosPage} from "../comentarios/comentarios.page";

@Component({
  selector: 'app-historia-id',
  templateUrl: './historia-id.page.html',
  styleUrls: ['./historia-id.page.scss'],
})
export class HistoriaIdPage implements OnInit {

  @Input() items;
  @Input() idHistoria;

  count: Comments;

  constructor( private modalControl: ModalController,
              private historiaService: CategoriaServicesService) { }

  ngOnInit() {
    console.log(this.items);
    this.getNComentario();
  }

  retrocederModal(){
    this.modalControl.dismiss();
  }

    getNComentario(){
    this.historiaService.getNComentario(this.idHistoria).subscribe((res: Comments) => {
      this.count = res;

    })
}

  async getComentarios(e: any){

    const modal = await  this.modalControl.create({
      component: ComentariosPage,
      componentProps: {
        id: this.idHistoria,
        comment: e.countCommentHistory
      }
    });

    await modal.present();
  }
}
