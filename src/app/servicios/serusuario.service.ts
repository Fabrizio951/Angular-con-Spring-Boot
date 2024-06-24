import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerusuarioService {

  private baseUrl = 'http://localhost:9898/rest_user';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/login`, { nombre: username, contrasena: password });
  }

}
