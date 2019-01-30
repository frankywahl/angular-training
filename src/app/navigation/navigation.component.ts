import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/router/login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.loginService.isUserLoggedIn();
  }
}
