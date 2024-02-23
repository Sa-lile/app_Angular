import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { AjouterComponent } from './ajouter/ajouter.component';


const routes: Routes = [
  { path:"", component: ListeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'ajouter', component: AjouterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
