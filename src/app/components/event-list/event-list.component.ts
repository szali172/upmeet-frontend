import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';
import { EventCardComponent } from "../event-card/event-card.component";


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] 
})
export class EventListComponent implements OnInit {
  eventsService = inject(EventsService);
  events: Event[] = [];
  currentMode: string = 'all';

  ngOnInit() {
   this.loadEvents()
  }

  toggleFavorite(id: string) {
    
    // this.events.isFavorited = !this.events.isFavorited; 
  }

  loadEvents() {
    this.eventsService.getAllEvents().subscribe(events => {
    this.events= events
    });
  }
}