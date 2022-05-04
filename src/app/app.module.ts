import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {CreateTransporteurComponent} from "./transporteur/create-transporteur/create-transporteur.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListTransporteurComponent } from './transporteur/list-transporteur/list-transporteur.component';
import { UpdateTransporteurComponent } from './transporteur/update-transporteur/update-transporteur.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup'
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CreateEventComponent } from './calendar/create-event/create-event.component';
import { AfficheEventComponent } from './calendar/affiche-event/affiche-event.component';
import { CreateDemenagementComponent } from './demenagement/create-demenagement/create-demenagement.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreateTransporteurComponent,
    ListTransporteurComponent,
    UpdateTransporteurComponent,
    CreateEventComponent,
    AfficheEventComponent,
    CreateDemenagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    NgToastModule,
    FullCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
