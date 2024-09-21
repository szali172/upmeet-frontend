import { Component, OnInit } from '@angular/core';
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

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoritesService.GetFavoritesByUserId(this.userId).subscribe(
      (data: Event[]) => {
        this.favorites = data;
      },
      (error) => {
        console.error('Error fetching favorites:', error);
      }
    );
  }
}
