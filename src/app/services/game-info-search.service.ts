import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



export class GameInfoSearch{
  _id!: number;
  title!: string;
  image!: string;
  description!: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameInfoSearchSearchService {

  endpoint = 'http://localhost:3000/GameInfoSearch';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getGame(id: number): Observable<GameInfoSearch[]> {
    return this.httpClient.get<GameInfoSearch[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game fetched: ${id}`)),
        catchError(this.handleError<GameInfoSearch[]>(`Get game id=${id}`))
      );
  }

  getGames(): Observable<GameInfoSearch[]> {
    return this.httpClient.get<GameInfoSearch[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Games retrieved!')),
        catchError(this.handleError<GameInfoSearch[]>('Get game', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
