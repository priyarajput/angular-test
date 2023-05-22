import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  displayAnswer: any = [];

  constructor(private service: QuestionService) {
  }

  ngOnInit(): void {
    this.service.selectedQuestionList$.subscribe((value) => {
      if (Object.keys(value).length > 0)
        this.displayAnswer = value.getRawValue.questions;
    });

  }

}
