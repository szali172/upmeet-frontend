import { Component, inject, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Event } from '../../models/event';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent, RouterModule, EventCardComponent],
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent {
  favorites: Event[] = [];
  @Input() user: User | null = null;

  favoritesService = inject(FavoritesService)

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    if (this.user !== null) {
      this.favoritesService.GetFavoritesByUserId(this.user?.userId).subscribe(
        (data: Event[]) => {
          this.favorites = data;
        },
        (error) => {
          console.error('Error fetching favorites:', error);
        }
      );
    }
    
  }
}
