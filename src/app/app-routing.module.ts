import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateTransporteurComponent} from "./transporteur/create-transporteur/create-transporteur.component";
import {ListTransporteurComponent} from "./transporteur/list-transporteur/list-transporteur.component";
import {UpdateTransporteurComponent} from "./transporteur/update-transporteur/update-transporteur.component";
import {CreateDemenagementComponent} from "./demenagement/create-demenagement/create-demenagement.component";
import {ListDemenagementComponent} from "./demenagement/list-demenagement/list-demenagement.component";
import {FrontTransporteurComponent} from "./transporteur/front-transporteur/front-transporteur.component";


const routes: Routes = [
  {
    path: 'create',
    component: CreateTransporteurComponent
  },
  {
    path: 'update',
    component: UpdateTransporteurComponent
  },
  {
    path: 'affiche',
    component: ListTransporteurComponent
  },

  {
    path:'ajout',
    component:CreateDemenagementComponent
  },
  {
    path: 'affiche1',
    component: ListDemenagementComponent
  },
  {
    path: 'front',
    component:FrontTransporteurComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
