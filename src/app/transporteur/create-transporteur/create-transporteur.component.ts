import {Component, NgModule, OnInit} from '@angular/core';
import {Transporteur} from "../module/transporteur";
import {TransporteurService} from "../services/transporteur.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-create-transporteur',
  templateUrl: './create-transporteur.component.html',
  styleUrls: ['./create-transporteur.component.css']
})
export class CreateTransporteurComponent implements OnInit {

  listTransporteur: any;
  form:boolean=false;
  transporteur!:Transporteur;
  closeResult!: string;

  constructor(private transporteurservice:TransporteurService, private router: Router,  private toast: NgToastService) {}

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
  addtransporteur(t: any){
    this.transporteurservice.addtransporteur(t).subscribe(()=>{
      this.getAllTransporteur();
      this.form=false;
      this.toast.success({detail:"SUCCESS",summary:'transporteur est ajouté',duration:5000});
      this.router.navigate(['/affiche']);
    })


  }


}
