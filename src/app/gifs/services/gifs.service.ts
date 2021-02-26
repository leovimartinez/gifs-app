import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  private apiKey: string = 'plK3OU8E7uOowr4m4lWPLfY3yrBWEqpU'

  get historial() {
    return [...this._historial]
  }

  constructor( private http: HttpClient ) { }

  buscarGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10)
    }
    
    console.log(this._historial);

    //this.http.get()
  }

}
