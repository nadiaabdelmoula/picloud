import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../annonce';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[];


  constructor(private annonceservice: AnnonceService, private router: Router) { }

  ngOnInit(): void {
    this.getAnnonce();

  }

  private getAnnonce(){
    this.annonceservice.getAnnoncelist().subscribe(data => {
      this.annonces = data;
    });
  }

}
