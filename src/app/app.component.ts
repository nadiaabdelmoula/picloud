import { Component } from '@angular/core';
import {CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput} from '@fullcalendar/angular';
import {createEventId, INITIAL_EVENTS} from "./event-utils";
import {CalendarServiceService} from "./calendar/calendar-service.service";
import {Calendar} from "./calendar/modalCalendar/calendar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
