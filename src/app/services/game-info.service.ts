import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



export class GameInfo{
  _id!: number;
  title!: string;
  image!: string;
  description!: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameInfoService {

  endpoint = 'http://localhost:3000/gameInfo';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpClient: HttpClient) { }

  getGame(id: number): Observable<GameInfo[]> {
    return this.httpClient.get<GameInfo[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game fetched: ${id}`)),
        catchError(this.handleError<GameInfo[]>(`Get game id=${id}`))
      );
  }

  getGames(): Observable<GameInfo[]> {
    return this.httpClient.get<GameInfo[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Games retrieved!')),
        catchError(this.handleError<GameInfo[]>('Get game', []))
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
