import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionService {

    private question$ = new BehaviorSubject<any>({});
    selectedQuestionList$ = this.question$.asObservable();

    setQuestionList(data: any) {
        this.question$.next(data);
    }

}