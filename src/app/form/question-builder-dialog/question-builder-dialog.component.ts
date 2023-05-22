import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-builder-dialog',
  templateUrl: './question-builder-dialog.component.html',
  styleUrls: ['./question-builder-dialog.component.scss']
})
export class QuestionBuilderDialogComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<QuestionBuilderDialogComponent>,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.form = this.fb.group({
      type: ['textarea', Validators.required],
      question: ['', Validators.required],
      options: this.fb.array([]),
      answer: []
    });
  }

  get options(): FormArray {
    return this.form.get("options") as FormArray
  }

  newOption(): FormGroup {
    return this.fb.group({
      value: ['', Validators.required],
      checked: false
    })
  }

  radioChange(event: any) :void{
    if (event.value === 'textarea') {
      this.options.clear();
    } else {
      this.options.push(this.newOption())
    }
  }


  addOptions() {
    this.options.push(this.newOption());
  }

  removeOption(i: number) {
    this.options.removeAt(i);
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: this.form.getRawValue() })
  }

}
