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
  },  { path: 'register', component: RegisterComponent },
  { path: 'inscri', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
