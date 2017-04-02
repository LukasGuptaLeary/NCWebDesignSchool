import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './certifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CertificationsComponent
  ],
  exports: [
    CertificationsComponent
  ]
})
export class CertificationsModule { }
