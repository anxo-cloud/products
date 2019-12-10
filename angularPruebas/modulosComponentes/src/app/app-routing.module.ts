import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MainContentComponent } from './layout/main-content/main-content.component';


const routes: Routes = [
  {path: 'prueba',
  component: PruebaComponent},
  {path: '', component: MainContentComponent},
  {path: '', component: MainContentComponent},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
