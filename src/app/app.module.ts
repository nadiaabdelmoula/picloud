import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateSujetComponent } from './sujet/update-sujet/update-sujet.component';
import { ListSujetComponent } from './sujet/list-sujet/list-sujet.component';
import { CreateSujetComponent } from './sujet/create-sujet/create-sujet.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ShowSujetComponent } from './sujet/show-sujet/show-sujet.component';
import { ListCommentaireComponent } from './commentaire/list-commentaire/list-commentaire.component';
import { VideoStreamingComponent } from './video-streaming/video-streaming.component';
import {WebcamModule} from "ngx-webcam";
import { VideoStreaming2Component } from './video-streaming2/video-streaming2.component';
import { VideoStreaming3Component } from './video-streaming3/video-streaming3.component';
import { CreateCommentaireComponent } from './commentaire/create-commentaire/create-commentaire.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ShowReactionCommentaireComponent } from './reactionCommentaire/show-reaction-commentaire/show-reaction-commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpdateSujetComponent,
    ListSujetComponent,
    CreateSujetComponent,
    HomeComponent,
    FooterComponent,
    ShowSujetComponent,
    ListCommentaireComponent,
    VideoStreamingComponent,
    VideoStreaming2Component,
    VideoStreaming3Component,
    CreateCommentaireComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    ShowReactionCommentaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WebcamModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
