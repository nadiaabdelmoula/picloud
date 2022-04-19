import {Component, Inject, OnInit} from '@angular/core';
import {Reclamation} from "../model/reclamation";
import {ReclamationService} from "../services/reclamation.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-create-reclamation',
  templateUrl: './admin-create-reclamation.component.html',
  styleUrls: ['./admin-create-reclamation.component.css']
})
export class AdminCreateReclamationComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();
  constructor(
    private service: ReclamationService,
    private dialogRef: MatDialogRef<AdminCreateReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(r => this.reclamation = r);
  }

  add() {
    this.service.update(this.reclamation).subscribe(data => this.dialogRef.close())
  }
}
