import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;
  username: string = "";
  password: string = "";
  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const role = this.authService.getRoleForUser(this.username, this.password);

    if (role) {
      this.loggedIn = true;
      this.router.navigate([role]);
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    this.loggedIn = false;
    this.username = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}
