import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Mobilier} from "../model/mobilier";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MobilierService} from "../services/mobilier.service";
import {CreateMobilierComponent} from "../create-mobilier/create-mobilier.component";
import {UpdateMobilierComponent} from "../update-mobilier/update-mobilier.component";
import {ActivatedRoute} from "@angular/router";
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail-mobilier',
  templateUrl: './detail-mobilier.component.html',
  styleUrls: ['./detail-mobilier.component.css']
})
export class DetailMobilierComponent implements OnInit {

  public mobilier: Mobilier = new Mobilier();

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  // @ts-ignore
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  // @ts-ignore
  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private service: MobilierService,
    private activatedRoute: ActivatedRoute

  ) { }

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
  ngOnInit(): void {
    // @ts-ignore
    this.service.findById(this.activatedRoute.snapshot.params.idm).subscribe(response => {
      this.mobilier = response;
      console.log(this.mobilier)
    })
  }


  acheter() {
    if(confirm('voulez vous vraiment l\'acheter ? ')){
      this.mobilier.achteur = this.user;
      this.mobilier.status = false;
      this.service.update(this.mobilier).subscribe(r => this.ngOnInit());
    }

  }
}
