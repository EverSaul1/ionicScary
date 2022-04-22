import {Component, Input, OnInit} from '@angular/core';
import {CategoriaServicesService} from "../../services/categoria/categoria-services.service";
import {ModalController} from "@ionic/angular";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  @Input() id;
  @Input() comment;
  data: any[] = [];
  usuario: any[] = [];

  subscription: Subscription;
  profileForm = new FormGroup({
    comentario: new  FormControl('')
  })



  constructor(
    private modalControl: ModalController,
    private commentService: CategoriaServicesService) { }

  ngOnInit() {
    this.getData();
    this.subscription = this.commentService.refresh$.subscribe(() => {
      this.getData();
    })

  }

  getData(){
    this.commentService.getCommentarioHistoria(this.id).subscribe(res => {
      this.data = res;
      this.data.reverse();
    });
  }

  cerrarModal(){
    this.modalControl.dismiss();
  }

  enviarSMS(){
    const dateDay = new Date()
    const datos = {comment: this.profileForm.get('comentario').value, usuario:'6250d3a0642545ec7c17b2b1', history: this.id, dateComment: dateDay};
    setTimeout(() => {
      this.commentService.guardarComentario(datos).subscribe(res => this.data.push(res));
    }, 100);
    this.clear();
  }

  clear(){
    this.profileForm.get('comentario').setValue('');
  }

}
