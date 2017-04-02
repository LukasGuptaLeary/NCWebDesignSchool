import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesComponent } from './degrees.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DegreesComponent
  ],
  exports: [
    DegreesComponent
  ]
})
export class DegreesModule { }
