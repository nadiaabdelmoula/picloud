import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';
import { EditUserComponent } from '../popup/edit-user/edit-user.component';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user = new User();
  ListAnnonce :any[];
CountAnnonce:any;
Userstatus:any;





  constructor(private token: TokenStorageService,
                private userService: UserService,
                private modaleservice:NgbModal) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.userService.getUserByUsername(this.currentUser.username).subscribe(data => {
      this.user = data;
      this.ListAnnonce=data.annonces;
      this.CountAnnonce=data.annonces.length;
    }
      )
  }

  update(user:User){
    const ref= this.modaleservice.open(EditUserComponent,{ centered: true });
    ref.componentInstance.user = user;

    ref.result.then((yes)=>{
      console.log("ok click");
      
    },
    (cancel)=>{
console.log("Cancel click");

    })
  }

  ModeDECO(){
    this.Userstatus ="connected";
    if (window.localStorage.getItem("connected")=="connected"){
    window.localStorage.setItem("connected","disconnected");  
    this.Userstatus="disconnected";
    }
    else{
    window.localStorage.setItem("connected","connected");  
    this.Userstatus="connected";
  }
}

}