import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = 'http://localhost:8081/SpringMVC/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
private baseURL = "http://localhost:8081/SpringMVC/api/v1/users";
private baseRDV ="http://localhost:8081/SpringMVC/api/v1/DeleteRDV"
private baseRDVUpdate ="http://localhost:8081/SpringMVC/api/v1/RDVs"
private baseURLIMG = "http://localhost:8081/SpringMVC/api/v1/users/SetImage";
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getUserByUsername(username: String):Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${username}`);
  }

  updateUser(id:any, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  SetUserImage(id:any, image: any): Observable<any> {
    return this.http.put(`${this.baseURLIMG}/${id}`, image);
  }

  public deleteRDV(id: number){
    return this.http.delete(`${this.baseRDV}/${id}`);
  }

  UpdateRDV(id:any,daterdv:any): Observable<any> {
    return this.http.put(`${this.UpdateRDV}/${id}`, daterdv);
  }



  
}