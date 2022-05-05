import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-affecter-coupon',
  templateUrl: './affecter-coupon.component.html',
  styleUrls: ['./affecter-coupon.component.css']
})
export class AffecterCouponComponent implements OnInit {

  code:any;
  idannonce:number;
  
  constructor(public modal: NgbActiveModal,public annonceservice:AnnonceService) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.annonceservice.affecterCoupon(this.idannonce,this.code).subscribe(data => {
      
      this.modal.close('Yes');
   
    })
  }
}
