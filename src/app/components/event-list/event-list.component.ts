import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
toggleFavorite(arg0: any) {
throw new Error('Method not implemented.');
}
  events: Event[] = [];
  currentMode: string = 'all';

  //constructor(
    //private eventService: EventService,
    //private appEventService: AppEventService
 // ) {}

 // ngOnInit() {
    //this.eventService.currentMode$.subscribe(mode => {
      //this.currentMode = mode;
      //this.loadEvents();
    //});
  //}
}
