import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title = 'NCWebDesignSchool';
  public isCollapsed = true;

  public toggle(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.isCollapsed = bool;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
