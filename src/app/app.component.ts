import { Component, OnInit } from '@angular/core';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NCWebDesignSchool';
  constructor(private uService: UsersService) { }

  ngOnInit(): void {
    this.uService.getUser()
      .subscribe(
        data => {
          if (data) {
            console.log('Logged in as: ' + data.firstName + ' ' + data.lastName);
          } else {
            this.uService.logout();
          }
        },
        error => console.error(error)
      );
  }
}
