import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './shared/tabs/tabs.page';

const routes: Routes = [
  {
    path: 'scary',
    component: TabsPage
  },   {
    path: 'historia-id',
    loadChildren: () => import('./pages/historia-id/historia-id.module').then( m => m.HistoriaIdPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./pages/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/auth/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/auth/main/main.module').then( m => m.MainPageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
