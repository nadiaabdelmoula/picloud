import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';

const routes: Routes = [
  {path: "annonces", component: AnnonceListComponent},
  { path: 'annonces/:id', component: AnnonceDetailsComponent },
  { path: 'add', component: AddAnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
