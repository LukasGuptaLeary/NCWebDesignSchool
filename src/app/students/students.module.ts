import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentsComponent
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
