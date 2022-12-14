import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '', component: CardComponent
  },
  {
    path: ':id', component: DetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
