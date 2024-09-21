import { Component } from '@angular/core';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  eventName: string = '';
  eventDescription: string = '';
  eventLocation: string = '';
  eventTime: string = '';

  constructor(private eventsService: EventsService, private router: Router) {}

createEvent() {
  var newEvent: Omit<Event, 'eventId'> = {
    eventName: this.eventName,
    eventDescription: this.eventDescription,
    eventLocation: this.eventLocation,
    eventTime: new Date(this.eventTime)
  };

  this.eventsService.createEvent(newEvent).subscribe({
    next: (event) => {
      console.log('Event created',event);
      this.resetForm();
    }
  });
}

resetForm() {
  this.eventName = '';
  this.eventDescription = '';
  this.eventLocation = '';
  this.eventTime = '';
}

}
