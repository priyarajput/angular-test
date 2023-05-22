import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BuilderComponent } from './builder/builder.component';
import { AnswerComponent } from './answer/answer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { QuestionBuilderDialogComponent } from './question-builder-dialog/question-builder-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { QuestionService } from './question.service';


@NgModule({
  declarations: [
    BuilderComponent,
    AnswerComponent,
    QuestionBuilderDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule
  ],
  providers:[QuestionService]
})
export class FormModule { }
