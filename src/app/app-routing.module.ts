import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSujetComponent } from './sujet/update-sujet/update-sujet.component';
import { ListSujetComponent } from './sujet/list-sujet/list-sujet.component';
import { CreateSujetComponent } from './sujet/create-sujet/create-sujet.component';
import { ShowSujetComponent } from './sujet/show-sujet/show-sujet.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'forum',component:ListSujetComponent},
  {path:'forum/new',component:CreateSujetComponent},
  {path:'forum/show/:id',component:ShowSujetComponent},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inscri', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
