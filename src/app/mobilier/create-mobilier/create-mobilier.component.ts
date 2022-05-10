import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {Mobilier} from "../model/mobilier";
import {MobilierService} from "../services/mobilier.service";
import {ImageVideo} from "../../shared/model/imageVideo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-mobilier',
  templateUrl: './create-mobilier.component.html',
  styleUrls: ['./create-mobilier.component.css']
})
export class CreateMobilierComponent implements OnInit {

  mobilier: Mobilier = new Mobilier();
  image: string = '';
   imageSrc : ImageVideo[] = [];
   created:any=false;
  constructor(
    private service: MobilierService,
    private dialogRef: MatDialogRef<CreateMobilierComponent>,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.mobilier.imageVideo = this.imageSrc;
    // @ts-ignore
    this.mobilier.vendeur = JSON.parse(localStorage.getItem('auth-user'));
    // @ts-ignore
    this.mobilier.vendeur.roles = [];
   this.service.save(this.mobilier).subscribe( r =>  this.created=true)

    //this.service.save(this.mobilier).subscribe(data => this.dialogRef.close())
  }


  imageLoad(e: any) {
    var reader ;
    for (let i = 0; i < e.target.files.length; i++) {

    var file = e.dataTransfer ? e.dataTransfer.files[i] : e.target.files[i];
    var pattern = /image-*/;
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
      reader =  new FileReader();
      reader.onload = e => {
        let reader = e.target;
        this.imageSrc[i] = new ImageVideo();
        // @ts-ignore
        this.imageSrc[i].image = reader.result;
        console.log(this.imageSrc)
      };
    reader.readAsDataURL(file);
  }
  }


  closeMobilier (){
    this.dialogRef.close()
  }

  closeProfile (){
    this.dialogRef.close()
    this.router.navigate(['/profile'])

  }

}
