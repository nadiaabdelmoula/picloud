import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../services/reclamation.service";
import {Reclamation} from "../model/reclamation";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();
  constructor(
    private service: ReclamationService,
    private dialogRef: MatDialogRef<CreateReclamationComponent>
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.reclamation).subscribe(data => this.dialogRef.close())
  }
}
