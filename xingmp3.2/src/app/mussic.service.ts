import { Injectable } from '@angular/core';
import { Mussic } from './mussic';
import { MUSSICS } from './mock-mussic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MussicService {
  private mussicsUrl = 'https://mocki.io/v1/7cf635f1-daa3-4ccf-91a7-12b005c81eaa';
  constructor(private http: HttpClient) { }

  getMussics() {
    let url="https://mocki.io/v1/7cf635f1-daa3-4ccf-91a7-12b005c81eaa"
    //let url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  updateMussic(mussic: Mussic): Observable<any> {
    return this.http.put(this.mussicsUrl, mussic, this.httpOptions).pipe(
      // tap((_) => this.log(`updated hero id=${mussic.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  getmussic(id: number): Observable<Mussic> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const mussic = MUSSICS.find(h => h.id === id)!;
    return of(mussic);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  deleteMussic(id: number): Observable<Mussic> {
    const url = `${this.mussicsUrl}/${id}`;
    return this.http.delete<Mussic>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Mussic>('deleteHero'))
    );
  }
  addMussic(mussic: Mussic): Observable<Mussic> {
    return this.http.post<Mussic>(this.mussicsUrl, mussic, this.httpOptions).pipe(
      catchError(this.handleError<Mussic>('addHero'))
    );
  }
}
