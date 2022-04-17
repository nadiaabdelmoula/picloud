import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {Mobilier} from "../model/mobilier";
import {MobilierService} from "../services/mobilier.service";

@Component({
  selector: 'app-create-mobilier',
  templateUrl: './create-mobilier.component.html',
  styleUrls: ['./create-mobilier.component.css']
})
export class CreateMobilierComponent implements OnInit {

  mobilier: Mobilier = new Mobilier();
  constructor(
    private service: MobilierService,
    private dialogRef: MatDialogRef<CreateMobilierComponent>
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.mobilier).subscribe(data => this.dialogRef.close())
  }

}
