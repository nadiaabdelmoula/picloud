import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Annonce } from '../model/annonce';
import { Observable } from 'rxjs';
import { AnnonceFetch } from '../model/annonce-fetch';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  }

  private baseURL =  environment.api_url +  "api/v1/AjoutAnnonce/1";
  private baseURL2 = environment.api_url +  "api/v1/AfficheAnnonce";
  private baseURL1 = environment.api_url +  "api/v1/AfficheAnnonce";
  private baseURL3 = environment.api_url +  "api/v1/deleteAnnonce";
  private baseURL4 = environment.api_url +  "api/v1/ModifierAnnonce";
  private baseURL5 = environment.api_url +  "api/v1/AS";

  constructor(private httpClient: HttpClient) { }

  create(data: Annonce): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, data);

  }


  delete(id: number): Observable<Annonce> {
    const url= `${this.baseURL3}/${id}`;
    return this.httpClient.delete<Annonce>(url, this.httpOptions)
  }


  getUpdateAnnonce(id: number): Observable<Annonce> {
    const url= `${this.baseURL2}/${id}`;
    return this.httpClient.get<Annonce>(url, this.httpOptions);
  }


  updateAnnonce(annonce: AnnonceFetch): Observable<Annonce> {
    const url = `${this.baseURL4}/${annonce.id}`;
    return this.httpClient.put<Annonce>(url, annonce, this.httpOptions).pipe(
      map( () => annonce)
    );
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }


  findByID(id : number):Observable<Annonce> {
    // recuperation du json de la fonction (back)
    const url= `${this.baseURL1}/${id}`;
    // return user
    return this.httpClient.get<Annonce>(url,this.httpOptions);
  }


  getAnnoncelist(){
    return this.httpClient.get<Annonce[]>(`${this.baseURL2}`);
  }


  GetAnnonceSimilaires(id : number) {
    // recuperation du json de la fonction (back)
    const url= `${this.baseURL5}/${id}`;
    // return user
    return this.httpClient.get<Annonce[]>(url,this.httpOptions);
  }


}




