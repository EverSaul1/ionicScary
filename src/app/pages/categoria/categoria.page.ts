import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Categoria, List } from 'src/app/interface/categoria-interface';
import { CategoriaServicesService } from 'src/app/services/categoria/categoria-services.service';
import {HistoriaPage} from "../historia/historia.page";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  hayError = false;
  categoryArr: List[] = [];

  constructor(
    private categoryService: CategoriaServicesService,
    private modalControl: ModalController,
    ) { }

  ngOnInit() {
    this.traerCategory();
  }

  //GET CATEGORY
  traerCategory(){
    this.hayError = false;
    this.categoryService.getCategory()
      .subscribe((res: List[])  => {
        this.categoryArr = res;

        console.log(this.categoryArr);
      });

  }

  async modalCategoria(items: any){

    const modal = await this.modalControl.create({
      cssClass: 'fullscreen',
      component: HistoriaPage,
      componentProps: {
        idCategory: items._id,
        nameCategory: items.nameCategory,
      }
    });
    await modal.present();

  }



}
