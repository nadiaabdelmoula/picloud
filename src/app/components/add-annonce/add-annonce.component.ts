import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  isSuccessful=false;

  previews: string[] = [];
  imageInfos?: Observable<any>;
  

    annonce: Annonce = new Annonce();
    constructor(private annonceService: AnnonceService,private router: Router, 
    private uploadService: FileUploadService) { }
  
    ngOnInit(): void {
      console.log(this.isSuccessful + "on init ");
    }
    
  
    save(){
      
      this.annonceService.create(this.annonce).subscribe(data => {
        console.log(data);
        this.isSuccessful=true;
      },error => console.log(error))
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

// *******************************************
// upload image section
selectFiles(event: any): void {
  this.message = [];
  this.progressInfos = [];
  this.selectedFiles = event.target.files;

  this.previews = [];
  if (this.selectedFiles && this.selectedFiles[0]) {
    const numberOfFiles = this.selectedFiles.length;
    for (let i = 0; i < numberOfFiles; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.previews.push(e.target.result);
      };

      reader.readAsDataURL(this.selectedFiles[i]);
    }
  }
}

upload(idx: number, file: File,idannonce: number): void {
  this.progressInfos[idx] = { value: 0, fileName: file.name };

  if (file) {
    this.uploadService.upload(file, this.annonce.id).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          const msg = 'Uploaded the file successfully: ' + file.name;
          this.message.push(msg);
          this.imageInfos = this.uploadService.getFiles();
        }
      },
      (err: any) => {
        this.progressInfos[idx].value = 0;
        const msg = 'Could not upload the file: ' + file.name;
        this.message.push(msg);
      });
  }
}

uploadFiles(): void {
  this.message = [];

  if (this.selectedFiles) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i],this.annonce.id);
    }
  }
}

GoLogin(){
  console.log(this.isSuccessful +" on create");
  this.uploadFiles();
  this.RedirectToAnnonceList();
}
  
     }
