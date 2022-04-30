import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
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
  constructor(private token: TokenStorageService,
                private userService: UserService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.userService.getUserByUsername(this.currentUser.username).subscribe(data => {
      this.user = data;}
      )
  }
}