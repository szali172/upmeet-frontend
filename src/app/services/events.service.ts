import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Event } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventUrl: string = environment.apiUrl + "/Events";
  currentMode$: any;

  constructor(private httpClient: HttpClient) { }

  getAllEvents(currentMode: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.eventUrl);
  }

  getEventByID(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.eventUrl}/${id}`);
  }

  createEvent(event: Omit<Event, 'id'>): Observable<Event> {
    return this.httpClient.post<Event>(this.eventUrl, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.eventUrl}/${id}`);
  }

}

