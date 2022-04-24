import { Component, OnInit } from '@angular/core';
import {TransporteurService} from "../services/transporteur.service";
import {Router} from "@angular/router";
import {Transporteur} from "../module/transporteur";

@Component({
  selector: 'app-list-transporteur',
  templateUrl: './list-transporteur.component.html',
  styleUrls: ['./list-transporteur.component.css']
})
export class ListTransporteurComponent implements OnInit {
  listTransporteur: any;
  form:boolean=false;
  transporteur!:Transporteur;
  closeResult!: string;

  constructor(private transporteurservice:TransporteurService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTransporteur()
    this.transporteur={

      idTransporteur: null,
      nom: null,
      prenom: null,
      num: null,
      cin: null,
      etat: null
    }
  }
  getAllTransporteur(){
    this.transporteurservice.getAlltransporteur().subscribe(res=>this.listTransporteur=res)

  }
  deletetranporteur(idTransporteur:any){
    this.transporteurservice.deletetransporteur(idTransporteur).subscribe(()=>this.getAllTransporteur())
  }

}
