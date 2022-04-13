import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'scary',
    component: TabsPage,
    children: [
      {
        path: 'categoria',
        loadChildren: () => import('../../pages/categoria/categoria.module').then(m => m.CategoriaPageModule)
        
      },
      {
        path: 'historia',
        loadChildren: () => import('../../pages/historia/historia.module').then(m => m.HistoriaPageModule)
        
      },
      {
        path: '',
        redirectTo: '/scary/categoria',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/scary/categoria',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
