import { Usuario } from "./../models/usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseURL = "https://localhost:5001/api/usuario";

  constructor(private http: HttpClient) {}

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/list`);
  }
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/create`, usuario);
  }
}
