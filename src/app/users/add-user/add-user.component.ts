import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../users.service';
import { User, Profile } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup;

  constructor(private usersService: UsersService) {}

  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName,
      new Date(),
      new Profile('', '', '', ''),
      true);
    this.usersService.addUser(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
      password: new FormControl(null, Validators.nullValidator),
      faculty: new FormControl(null, Validators.nullValidator),
      student: new FormControl(null, Validators.nullValidator),
      admin: new FormControl(null, Validators.nullValidator)
    });
  }
}
