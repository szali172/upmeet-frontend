import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventCardComponent } from "./components/event-card/event-card.component";
import { Event } from './models/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upmeet-frontend';
  events: Event[] = [
    {eventId: 1, eventName: "TestName", eventDescription: "Example", eventLocation: "TestLocation", eventTime: new Date() },
    {eventId: 2, eventName: "another", eventDescription: "w", eventLocation: "lo", eventTime: new Date() },
    {eventId: 3, eventName: "Test1Name", eventDescription: "e", eventLocation: "cation", eventTime: new Date() },
    {eventId: 3, eventName: "Test1Name", eventDescription: "e", eventLocation: "cation", eventTime: new Date() }
  ]
}
