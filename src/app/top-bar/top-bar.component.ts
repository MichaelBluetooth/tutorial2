import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  getUsername() {
    if (this.loginService.isLoggedIn()) {
      return this.loginService.getCurrentUser().loginEmail;
    } else {
      return '';
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
