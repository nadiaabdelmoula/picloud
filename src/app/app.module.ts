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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateMobilierComponent } from './mobilier/create-mobilier/create-mobilier.component';
import { ListMobilierComponent } from './mobilier/list-mobilier/list-mobilier.component';
import { UpdateMobilierComponent } from './mobilier/update-mobilier/update-mobilier.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    AdminReclamationComponent,
    ListReclamationComponent,
    CreateMobilierComponent,
    ListMobilierComponent,
    UpdateMobilierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
