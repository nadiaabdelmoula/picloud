import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceFetch } from 'src/app/model/annonce-fetch';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
  val:any;
  annonces: Annonce[] = [];
  annonce:AnnonceFetch;

  constructor(public route:ActivatedRoute, public router: Router,public annonceservice: AnnonceService) { }

  ngOnInit(){
    let sub=this.route.params.subscribe(params =>{
      this.val=params['id'];

    });
    console.log("id: "+ this.val);
   this.annonceservice.getUpdateAnnonce(this.val).subscribe(data => {
      this.annonce = data;}
      )

    
  }


 update(){
    this.annonceservice.updateAnnonce(this.annonce).subscribe(data => {

    });
    this.router.navigate(['affiche']);
    this.getAnnonce();

  }
  


  getAnnonce() {
    this.annonceservice.getAnnoncelist().subscribe((response) => {
      this.annonces = response;
    });
}


}
