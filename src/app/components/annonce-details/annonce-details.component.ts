import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceFetch } from 'src/app/model/annonce-fetch';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.css']
})
export class AnnonceDetailsComponent implements OnInit {
  
  constructor(public route:ActivatedRoute, public router: Router,public annonceservice: AnnonceService) { }
  val:any;
  annonce:AnnonceFetch;

  ngOnInit(){
    let sub=this.route.params.subscribe(params =>{
      this.val=params['id'];

    });
    this.annonceservice.findByID(this.val).subscribe(data => {
      this.annonce = data;}
      )

    
  }
}
