import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from './annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseURL = "http://localhost:8088/SpringMVC/api/v1/AfficheAnnonce";

  constructor(private httpClient: HttpClient) { }
  getAnnoncelist(): Observable<Annonce[]>{
    return this.httpClient.get<Annonce[]>(`${this.baseURL}`);
  }
}
