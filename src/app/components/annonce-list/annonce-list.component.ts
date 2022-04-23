import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../../model/annonce';
import { AnnonceService } from '../../service/annonce.service';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[];
  p: number = 1;
  localisation: any;

  constructor(private annonceservice: AnnonceService, private router: Router) { }

  ngOnInit(): void {
    this.getAnnonce();

  }

  private getAnnonce(){
    this.annonceservice.getAnnoncelist().subscribe(data => {
      this.annonces = data;
    });
  }

  Search(){
    if(this.localisation== ""){
      this.ngOnInit();

    } else {
      this.annonces=this.annonces.filter(data => {
        return data.localisation.toLocaleLowerCase().match(this.localisation.toLocaleLowerCase());
      })
    }
  }

 



}
