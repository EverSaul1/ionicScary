import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaIdPage } from './historia-id.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaIdPageRoutingModule {}
