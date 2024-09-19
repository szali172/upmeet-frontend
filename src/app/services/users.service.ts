import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = environment.apiUrl + "/User";

  constructor(private httpClient: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

  // Get user by ID
  getUserByID(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.userUrl}/${id}`);
  }

  // Create a new user
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.httpClient.post<User>(this.userUrl, user);
  }

  // Delete a user by ID
  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.userUrl}/${id}`);
  }
}
