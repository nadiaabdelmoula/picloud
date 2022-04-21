import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseURL = "http://localhost:8088/SpringMVC/api/v1/AfficheAnnonce";

  constructor(private httpClient: HttpClient) { }
  getAnnoncelist(): Observable<Annonce[]>{
    return this.httpClient.get<Annonce[]>(`${this.baseURL}`);
  }

  create(data: Annonce): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }
  findByTitle(title: any): Observable<Annonce[]> {
    return this.httpClient.get<Annonce[]>(`${this.baseURL}?title=${title}`);
  }
}




