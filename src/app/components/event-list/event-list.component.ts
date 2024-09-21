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
  currentMode: string = 'all';

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
    console.log(events);
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
  
}