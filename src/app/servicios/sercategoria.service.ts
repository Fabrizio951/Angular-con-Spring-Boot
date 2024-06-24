import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Clcategoria } from '../modelo/clcategoria';

@Injectable({
  providedIn: 'root'
})
export class SercategoriaService {
  private url: string = "http://localhost:9898/rest_cat"

  constructor(
    private http: HttpClient
  ) { }

    // LISTAR USUARIO
    getAll(): Observable<Clcategoria[]> {
      return this.http.get<Clcategoria[]>(this.url+ '/listar');
    }

    // CREAR USUARIO
    create(usuario: Clcategoria): Observable<Clcategoria> {
      return this.http.post<Clcategoria>(this.url+ '/insertar', usuario);
    }
    // ELIMINAR USUARIO
    delete(id: number): Observable<Clcategoria> {
      return this.http.delete<Clcategoria>(this.url + '/eliminar/' + id);
    }
 
    // MODIFICAR USUARIO
    update(usuario: Clcategoria): Observable<Clcategoria> {
      return this.http.put<Clcategoria>(this.url+ '/modificar', usuario);
    }
    // BUSCAR USUARIO
    get(id: number): Observable<Clcategoria> {
      return this.http.get<Clcategoria>(this.url + '/buscar/' + id);
    }
}
