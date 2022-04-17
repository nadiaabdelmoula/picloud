import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MobilierService} from "../services/mobilier.service";
import {Mobilier} from "../model/mobilier";

@Component({
  selector: 'app-update-mobilier',
  templateUrl: './update-mobilier.component.html',
  styleUrls: ['./update-mobilier.component.css']
})
export class UpdateMobilierComponent implements OnInit {

  mobilier: Mobilier = new Mobilier();

  constructor(
    private service: MobilierService,
    private dialogRef: MatDialogRef<UpdateMobilierComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.mobilier = response;
    })
  }


  update() {
    this.service.update(this.mobilier).subscribe(r => this.dialogRef.close())
  }

}
