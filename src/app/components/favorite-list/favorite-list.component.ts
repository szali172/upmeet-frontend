import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Event } from '../../models/event';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent, RouterModule],
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent {
  favorites: Event[] = [];
  userId: number = 1; 

  favoritesService = inject(FavoritesService)

  ngOnInit(): void {
    this.getUserFavorites();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['favorites'] && this.favorites !== null) {
      this.getUserFavorites(); 
    }
  }

  getUserFavorites() : void {
      this.favoritesService.GetFavoritesByUserId(this.userId).subscribe(
        (response) => {
          this.favorites = response;
        }
      )
  }

}