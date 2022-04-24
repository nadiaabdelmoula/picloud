import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Transporteur} from "../module/transporteur";


@Injectable({
  providedIn: 'root'
  })
export class TransporteurService{
  private api_url= environment.api_url + 'transporteur';
constructor(private http: HttpClient) {}

  public  getAlltransporteur(){
  return this.http.get(this.api_url + '/retrieve-all-transporteur')
  }


  public addtransporteur(transporteur: Transporteur){
    return this.http.post(this.api_url + '/add-transporteur', transporteur)
  }

  public deletetransporteur(idTransporteur: any){
  return this.http.delete(this.api_url + '/remove-transporteur/'+ idTransporteur)
}
public updatetransporteur(transporteur:Transporteur){
  return this.http.put(this.api_url + '/modify-transporteur',transporteur)
}


}
