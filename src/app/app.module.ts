import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceListComponent,
    AnnonceDetailsComponent,
    AddAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
