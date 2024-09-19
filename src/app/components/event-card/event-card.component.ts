import { Component, inject, Input } from '@angular/core';
import { Event } from '../../models/event';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

  // eventService = inject();

  @Input() event: Event | null = null;


  getEventDetails() {
    console.log(this.event?.eventName);
  }
  
  // getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
}
