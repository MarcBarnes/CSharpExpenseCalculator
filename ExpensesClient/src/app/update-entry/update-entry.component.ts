import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  formUpdate:FormGroup;
  id:number;

  //injectors
  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA){Description, IsExpense, Value, Id},
              private service:EntryService) { 

                this.id=Id;
                this.formUpdate=fb.group({
                  description: [Description, Validators.required],
                  isExpensef: [IsExpense, Validators.required],
                  value: [Value, Validators.required],
                })

              }

  types: Type[  ]=[
    {value:true, display:'Expense'},
    {value:false, display:'Income'}
  ]

  close(){
    console.log("cancel clicked");
    this.dialogRef.close();
  }
  save(){
    this.formUpdate.value.id = this.id;
    console.log("save clicked");
    this.service.updateEntry(this.id, this.formUpdate.value).subscribe((data) => {
      console.log('Data: ', data);
    })
  }

  ngOnInit() {
  }

}
