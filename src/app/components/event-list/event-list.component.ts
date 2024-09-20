import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] 
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  currentMode: string = 'all';

  constructor(
    private eventService: EventsService
  ) {}

  ngOnInit() {
    this.eventService.currentMode$.subscribe((mode: string) => {
      this.currentMode = mode;
      this.loadEvents();
    });
  }

  toggleFavorite(id: string) {
    
    // this.events.isFavorited = !this.events.isFavorited; 
  }

  loadEvents() {
    this.eventService.getAllEvents(this.currentMode).subscribe(events => {
    });
  }
}