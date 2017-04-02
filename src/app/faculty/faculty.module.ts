import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FacultyComponent
  ],
  exports: [
    FacultyComponent
  ]
})
export class FacultyModule { }
