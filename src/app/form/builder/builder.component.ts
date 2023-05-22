import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionBuilderDialogComponent } from '../question-builder-dialog/question-builder-dialog.component';
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  form: FormGroup;
  constructor(public dialog: MatDialog, public fb: FormBuilder,
    private router: Router, public service: QuestionService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      questions: this.fb.array([]),
    });

    this.service.selectedQuestionList$.subscribe(r => {
      if (r.forminstance) {
        this.createQustionList(r.getRawValue.questions);
      } else {
        this.createQustionList([]);
      }
    })
  }

  createQustionList(data: Array<any>) {
    console.log("data",data);
    data.forEach((ele: any) => {
      
      this.questions().push(this.fb.group({
        "type": ele.type,
        "question":ele.question,
        "options": ele.type === 'checkbox' ? this.createOptionList(ele.options) : [],
        "answer": ele.type === 'checkbox' ? "" :[ele.answer , Validators.required]
      }))
    })

  }

  createOptionList(options: Array<any>): FormArray {
    let a: any = this.fb.array([])
    options.forEach((element: { value: any; checked: any; }) => {
      a.push(this.fb.group({
        "value": element.value,
        "checked": element.checked
      }))
    });
    return a;
  }

  questions(): FormArray {
    return this.form.get("questions") as FormArray
  }

  skills(index: number): FormArray {
    return this.questions().at(index).get("options") as FormArray
  }

  openDialog(): void {
    
    console.log('///////////',this.form);
    const dialogRef = this.dialog.open(QuestionBuilderDialogComponent, {
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data) {
        if (Object.keys(res.data).length > 0) {
          let a = [res.data];
          console.log("res.data",res.data,a);
          this.createQustionList(a);
        }
      }
    })
  }

  redirectTo(): void {
    this.router.navigateByUrl('/form/answer');
    this.service.setQuestionList({ forminstance: this.form, getRawValue: this.form.getRawValue() });
  }

}
