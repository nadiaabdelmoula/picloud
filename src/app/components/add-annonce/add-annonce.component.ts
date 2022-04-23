import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  

    annonce: Annonce = new Annonce();
    constructor(private annonceService: AnnonceService,private router: Router) { }
  
    ngOnInit(): void {
      
    }
  
    save(){
      
        this.annonceService.create(this.annonce).subscribe(data => {
        console.log(data);
        this.RedirectToAnnonceList();
      },error => console.log(error));
    }
  
    RedirectToAnnonceList(){
  this.router.navigate(['/affiche']);
    }
  
    onSubmit(){
      //console.log(this.user);
      this.save();
    }
    files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
  
     }
