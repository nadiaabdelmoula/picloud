import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
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
  annonces: Annonce[];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  ngOnInit(){
    let sub=this.route.params.subscribe(params =>{
      this.val=params['id'];

    });
    this.annonceservice.findByID(this.val).subscribe(data => {
      this.annonce = data;}
      )

      this.AnnonceSimilaires();

    
  }

  AnnonceSimilaires(){
    this.annonceservice.GetAnnonceSimilaires(this.val).subscribe(data => {
      this.annonces = data;}
      )
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
