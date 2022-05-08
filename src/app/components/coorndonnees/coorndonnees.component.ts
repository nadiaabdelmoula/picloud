import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AnnonceService } from 'src/app/service/annonce.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-coorndonnees',
  templateUrl: './coorndonnees.component.html',
  styleUrls: ['./coorndonnees.component.css']
})
export class CoorndonneesComponent implements OnInit {
  idannonce:number;
  user=new User();
  userid:any;
  constructor(private annonceService:AnnonceService,private userservice:UserService) { }

  ngOnInit(): void {
    //this.userid=2;
    this.annonceService.getUserByAnnonce(this.idannonce).subscribe(data => {
      this.userid=data;
      console.log("hhhhhh");
      console.log(this.userid);
      this.userservice.getUserByIdForAnnonce(data).subscribe(data => {
        this.user=data;

      })
    });

  }

}
