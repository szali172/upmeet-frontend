import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Favorite } from '../models/favorite';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoriteUrl: string = environment.apiUrl + "/Favorite";

  constructor(private httpClient: HttpClient) { }


  GetAllFavoritesById(id: number): Observable<Favorite> {
    return this.httpClient.get<Favorite>(`${this.favoriteUrl}/${id}`);
  }

  CreateFavorite(favorite: Omit<Favorite, 'id'>): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.favoriteUrl, favorite);
  }

  DeleteFavoriteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.favoriteUrl}/${id}`);
  }

}
