import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import data from '../../../db.json';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  api_url = 'http://localhost:5000/upcoming_events';
  constructor(private http: HttpClient) {}

  get_upcoming_events(): Observable<any> {
    //return this.http.get<any>(this.api_url);
    return of(data.upcoming_events);
  }

  get_event_by_id(id: any) {
    // const integration_url = this.api_url + '/' + id;
    // return this.http.get<any>(integration_url);
    const event = data.upcoming_events.filter((x) => x.id == id);
    return of(event);
  }
}
