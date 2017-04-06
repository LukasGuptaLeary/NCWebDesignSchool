import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    AddUserComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
