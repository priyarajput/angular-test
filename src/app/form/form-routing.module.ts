import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  {
    path: 'builder',
    component: BuilderComponent
  },
  { path: '', redirectTo: 'builder', pathMatch: 'full' },
  {
    path: 'answer',
    component: AnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
