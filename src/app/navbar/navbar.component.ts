import { Component, OnInit } from '@angular/core';
import {User} from "../mobilier/model/mobilier";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user?: User ;

  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      localStorage.setItem('user', JSON.stringify(new User(1, "Nadia", "Abdelmoula")) ) ;
    }

    // @ts-ignore
      this.user = JSON.parse( localStorage.getItem('user'));

  }

  changeUser() {
    // @ts-ignore
    if(this.user.id == 1 ) {
      localStorage.setItem('user', JSON.stringify(new User(2, "Hedi", "Abdelmoula")))
    }else {
      localStorage.setItem('user', JSON.stringify(new User(1, "Nadia", "Abdelmoula")) ) ;
    }
    location.reload();
  }
}
