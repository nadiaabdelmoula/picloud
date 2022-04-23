import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AfficheAnnonceComponent } from './components/affiche-annonce/affiche-annonce.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { UpdateAnnonceComponent } from './components/update-annonce/update-annonce.component';

const routes: Routes = [
  {path: "annonces", component: AnnonceListComponent},
  { path: 'annonces/:id', component: AnnonceDetailsComponent },
  { path: 'add', component: AddAnnonceComponent },
  { path: 'affiche', component: AfficheAnnonceComponent },
  { path: 'update/:id', component: UpdateAnnonceComponent },
  { path: 'update/:id', component: UpdateAnnonceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
