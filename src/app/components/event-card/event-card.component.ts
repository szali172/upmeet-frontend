import { Component, inject, Input } from '@angular/core';
import { Event } from '../../models/event';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { User } from '../../models/user';
import { Favorite } from '../../models/favorite';
import { Modal } from 'bootstrap';

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
  @Input() cardColor: string = "#f5deb3";


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
      this.favoritesService.DeleteFavorite(this.user.userId, this.event.eventId).subscribe();
    }
  }


  /* Switch between the favorited states and update the Db */
  switchState(): void {
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


  /* The following methods and properties handle event bubbling on the favorite button click */
  disableModalTrigger: boolean = false;

  onCardClick(): void {
    if (!this.disableModalTrigger && this.event) {
      const modalId = `#event-details-modal-${this.event.eventId}`;
      const modalElement = document.querySelector(modalId);
      if (modalElement) {
        const modalInstance = new Modal(modalElement);
        modalInstance.show();
      }
    }
  }

  handleFavoriteClick($event: any): void {
    // Prevent the modal from being triggered
    this.disableModalTrigger = true;

    // Stop the event from bubbling up to the card click event
    $event.stopPropagation();

    this.switchState();

    // Re-enable the modal trigger after a small delay
    setTimeout(() => this.disableModalTrigger = false, 300);
  }
  
}
