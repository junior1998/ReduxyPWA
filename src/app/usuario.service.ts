import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }


  getUsers() {
    return this.http.get(`${ this.url }/usuarios`)
          .pipe(
            map( resp => resp['usuario'])
          );
  }

  // getUserById( id: string ) {
  //   return this.http.get(`${ this.url }/users/${ id }`)
  //         .pipe(
  //           map( resp => resp['data'])
  //         );
  // }

}
