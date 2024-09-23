import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';
import { EventCardComponent } from "../event-card/event-card.component";
import { User } from '../../models/user';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] 
})

export class EventListComponent implements OnInit {
  eventsService = inject(EventsService);
  favoritesService = inject(FavoritesService)

  events: Event[] = [];
  assignedColors: string[] = [""];
  colors: string[] = ['#e3e4d4', '#e1c846', '#6b8c5c', '#ab7dd2', '#edca78', '#dc5319', '#cf6152',
    '#cc7cef', '#11e58f', '#f2e2d1', '#f2e28f', '#ba94ad', '#d2af77']

  @Input({required: true}) user: User | null = null;
  userFavorites: Event[] = [];


  ngOnInit() {
   this.loadEvents()
  }


  /* @Input user is created initially as null
     This method is called once the variahle is update
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user !== null) {
      this.getUserFavorites();  // Call it only when user is updated
    }
  }


  loadEvents() {
    this.eventsService.getAllEvents().subscribe(events => {
    this.events = events
    this.setRandomColors()
    });
  }


  /* Fetch the favorite events for this current user */
  getUserFavorites() : void {
    if (this.user !== null) {
      this.favoritesService.GetFavoritesByUserId(this.user?.userId).subscribe(
        (response) => {
          this.userFavorites = response;
        }
      )
    }
  }


  /* Check if the passed in event is in the user's list of favorite events */
  eventIsFavorited(eventId: number) : boolean {
    // Grab the eventIds from the favorited events and cross-check with the currnet eventId
    return this.userFavorites.map(a => a.eventId).includes(eventId);
  }

  /* Set a random background color for each event card */
  setRandomColors() : void {
    this.assignedColors = new Array(this.events.length);
    for (let i = 0; i < this.events.length; i++) {
      let color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.assignedColors[i] = color
    }
  }
  
}