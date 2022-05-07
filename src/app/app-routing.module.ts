import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";
import {ListMobilierComponent} from "./mobilier/list-mobilier/list-mobilier.component";
import {AdminReclamationComponent} from "./reclamation/admin-reclamation/admin-reclamation.component";
import {DetailMobilierComponent} from "./mobilier/detail-mobilier/detail-mobilier.component";
import {StatMobilierComponent} from "./mobilier/stat-mobilier/stat-mobilier.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {AnnonceListComponent} from "./components/annonce-list/annonce-list.component";
import {AnnonceDetailsComponent} from "./components/annonce-details/annonce-details.component";
import {AfficheAnnonceComponent} from "./components/affiche-annonce/affiche-annonce.component";
import {UpdateAnnonceComponent} from "./components/update-annonce/update-annonce.component";
import {AddAnnonceComponent} from "./components/add-annonce/add-annonce.component";
import { CommonModule } from '@angular/common';
import { UpdateSujetComponent } from './sujet/update-sujet/update-sujet.component';
import { ListSujetComponent } from './sujet/list-sujet/list-sujet.component';
import { CreateSujetComponent } from './sujet/create-sujet/create-sujet.component';
import { ShowSujetComponent } from './sujet/show-sujet/show-sujet.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'reclamations',
    component: ListReclamationComponent
  },{
    path: 'mobilier',
    component: ListMobilierComponent
  }, {
    path: 'reclamationsAdmin',
    component: AdminReclamationComponent
  }, {
  path: 'mobilier/:idm',
    component: DetailMobilierComponent
  }, {
  path: "stat-mobilier",
    component: StatMobilierComponent
  },
  { path: 'register',
    component: RegisterComponent },
  { path: 'inscri',
    component: LoginComponent },
  { path: 'profile',
    component: ProfileComponent },
  { path: 'admin',
    component: BoardAdminComponent},
  {path: "",
    redirectTo: "home", pathMatch: 'full'},
  {path: "annonces", component: AnnonceListComponent},
  { path: 'annonces/:id', component: AnnonceDetailsComponent },
  { path: 'add', component: AddAnnonceComponent },
  { path: 'affiche', component: AfficheAnnonceComponent },
  { path: 'update/:id', component: UpdateAnnonceComponent },
  {path:'home',component:HomeComponent},
  {path:'forum',component:ListSujetComponent},
  {path:'forum/new',component:CreateSujetComponent},
  {path:'forum/show/:id',component:ShowSujetComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
