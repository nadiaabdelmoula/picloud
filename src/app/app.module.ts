import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AdminReclamationComponent } from './reclamation/admin-reclamation/admin-reclamation.component';
import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    AdminReclamationComponent,
    ListReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
