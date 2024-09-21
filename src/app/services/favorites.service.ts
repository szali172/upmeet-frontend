import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Favorite } from '../models/favorite';
import { environment } from '../../environments/environment';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoriteUrl: string = environment.apiUrl + "/Favorites";

  constructor(private httpClient: HttpClient) { }


  GetFavoritesByUserId(userId: number): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.favoriteUrl}/${userId}`);
  }

  CreateFavorite(favorite: Omit<Favorite, 'id'>): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.favoriteUrl, favorite);
  }

  DeleteFavorite(userId: number, eventId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.favoriteUrl}/userId=${userId}/eventId=${eventId}`);
  }

}
