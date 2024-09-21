import { Component, inject, Input } from '@angular/core';
import { Event } from '../../models/event';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { User } from '../../models/user';
import { Favorite } from '../../models/favorite';
import { Event as AngularEvent } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})

export class EventCardComponent {

  favoritesService = inject(FavoritesService)

  @Input({required: true}) user: User | null = null;
  @Input({required: true}) event: Event | null = null;
  @Input({required: true}) favorited: boolean = false;


  getEventDetails() {
    // let modal = document.getElementById()
    console.log("Parent is being clicked");
  }

  ngOnInit() {
    this.stringToDatetime()
  }


  /* If eventTime property is a string, convert it to a Date object */
  stringToDatetime() : void {
    if (this.event !== null && typeof this.event?.eventTime === 'string') {
      this.event.eventTime = new Date(this.event?.eventTime);
    }
  }


  /* Adds the current event to the user's list of favorite events */
  favoriteEvent() : void {
    if (this.user !== null && this.event !== null) {
      let fav: Omit<Favorite, 'id'> = {userId: this.user.userId, eventId: this.event.eventId}
      this.favoritesService.CreateFavorite(fav).subscribe()
    }
  }


  /* Removes the current favorited event from the user's list */
  removeFavorite() : void {
    if (this.user !== null && this.event !== null) {
      this.favoritesService.DeleteFavorite(this.user.userId, this.event.eventId).subscribe()
    }
  }


  /* Switch between the favorited states and update the Db */
  switchState($event: any): void {
    // Stop the click event from bubbling up to the container
    $event.stopPropagation();

    // Event is currently favorited, it now needs to be removed
    if (this.favorited === true) {
      this.removeFavorite();
    } 
    // Event isn't currently favorited, it now needs to be added
    else {
      this.favoriteEvent();
    }

    this.favorited = !this.favorited;
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
