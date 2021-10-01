import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vaga } from "../models/vaga";

@Injectable({
  providedIn: "root",
})
export class VagaService {
  private baseURL = "https://localhost:5000/api/vaga";

  constructor(private http: HttpClient) {}

  list(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${this.baseURL}/list`);
  }
  create(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(`${this.baseURL}/create`, vaga);
  }
}
