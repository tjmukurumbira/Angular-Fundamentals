import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppConsts } from './constants';


@Injectable({providedIn: 'root'})
export class EventService {

  constructor( private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(AppConsts.remoteServiceBaseUrl+ '/api/events')
    .pipe(catchError(this.handleError<IEvent[]>('getEvents',[])));
  }


  getEvent(id: number) : Observable< IEvent>{
    return this.http.get<IEvent>(AppConsts.remoteServiceBaseUrl+ '/api/events/'+id)
    .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event: IEvent): Observable< IEvent> {
      let options = {headers: new HttpHeaders({ 'Content-Type':'application/json'})};
     return this.http.post<IEvent>(AppConsts.remoteServiceBaseUrl+'/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  private handleError<T>( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };


  }
  searchSessions( searchText: string) :Observable<ISession[]> {
    return this.http.get<ISession[]>(AppConsts.remoteServiceBaseUrl + '/api/sessions/search?search='+searchText)
    .pipe(catchError(this.handleError<ISession[]>('searchSessions')));


  }
}
