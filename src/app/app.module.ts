import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {HttpClientModule} from "@angular/common/http";
import { CreateMobilierComponent } from './mobilier/create-mobilier/create-mobilier.component';
import { ListMobilierComponent } from './mobilier/list-mobilier/list-mobilier.component';
import { UpdateMobilierComponent } from './mobilier/update-mobilier/update-mobilier.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminCreateReclamationComponent } from './reclamation/admin-create-reclamation/admin-create-reclamation.component';
import { DetailMobilierComponent } from './mobilier/detail-mobilier/detail-mobilier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { StatMobilierComponent } from './mobilier/stat-mobilier/stat-mobilier.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AfficheAnnonceComponent } from './components/affiche-annonce/affiche-annonce.component';
import { UpdateAnnonceComponent } from './components/update-annonce/update-annonce.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EditUserComponent } from './popup/edit-user/edit-user.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';

import { AffecterCouponComponent } from './components/affecter-coupon/affecter-coupon.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent, 
    AdminReclamationComponent,
    ListReclamationComponent,
    CreateMobilierComponent,
    ListMobilierComponent,
    UpdateMobilierComponent,
    AdminCreateReclamationComponent,
    DetailMobilierComponent,
    StatMobilierComponent,    
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    EditUserComponent,
    AnnonceListComponent,
    AnnonceDetailsComponent,
    AddAnnonceComponent,
    AfficheAnnonceComponent,
    UpdateAnnonceComponent,
    
    AffecterCouponComponent,
          RendezVousComponent
    

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
    MatSelectModule,
    NgbModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
