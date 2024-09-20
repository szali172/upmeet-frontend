import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';


export interface Event {
  title: string;
  description: string;
  date: string;
  id: string;
  isFavorited: boolean;
}

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] 
})
export class EventListComponent implements OnInit {
  event = {
    title: '',
    description: '',
    date: '',
    id: '',
    isFavorited: false
  };

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
    
    this.event.isFavorited = !this.event.isFavorited; 
  }

  loadEvents() {
    this.eventService.getAllEvents(this.currentMode).subscribe(events => {
    });
  }
}