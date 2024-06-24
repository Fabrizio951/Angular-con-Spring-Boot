import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Clproducto } from '../modelo/clproducto';

@Injectable({
  providedIn: 'root'
})
export class SerproductoService {

  private url: string = "http://localhost:9898/rest_pro";
  constructor(
    private http: HttpClient
  ) { }

    // LISTAR USUARIO
    getAll(): Observable<Clproducto[]> {
      return this.http.get<Clproducto[]>(this.url+ '/listar');
    }
    // CREAR USUARIO
    create(usuario: Clproducto): Observable<Clproducto> {
      return this.http.post<Clproducto>(this.url+ '/insertar', usuario);
    }
    // ELIMINAR USUARIO
    delete(id: number): Observable<Clproducto> {
      return this.http.delete<Clproducto>(this.url + '/eliminar/' + id);
    }
    // MODIFICAR USUARIO
    update(usuario: Clproducto): Observable<Clproducto> {
      return this.http.put<Clproducto>(this.url+ '/modificar', usuario);
    }
    // BUSCAR USUARIO
    get(id: number): Observable<Clproducto> {
      return this.http.get<Clproducto>(this.url + '/buscar/' + id);
    }
}
