import {Component, Inject, OnInit} from '@angular/core';
import {Reclamation} from "../model/reclamation";
import {ReclamationService} from "../services/reclamation.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();

  constructor(
    private service: ReclamationService,
    private dialogRef: MatDialogRef<UpdateReclamationComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.reclamation = response;
    })
  }


  update() {
    this.service.update(this.reclamation).subscribe(r => this.dialogRef.close())
  }
}
