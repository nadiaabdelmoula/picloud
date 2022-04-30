import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AfficheAnnonceComponent } from './components/affiche-annonce/affiche-annonce.component';
import { UpdateAnnonceComponent } from './components/update-annonce/update-annonce.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceListComponent,
    AnnonceDetailsComponent,
    AddAnnonceComponent,
    AfficheAnnonceComponent,
    UpdateAnnonceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    [BrowserModule, NgxPaginationModule,
    NgbModule
  ]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
