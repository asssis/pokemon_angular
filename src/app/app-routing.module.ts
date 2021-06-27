import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pokemon/index/index.component';
import { DetailComponent } from './pokemon/detail/detail.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'detail/:id', component: DetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
