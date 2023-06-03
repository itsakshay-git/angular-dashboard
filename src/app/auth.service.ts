import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoleMap: { [username: string]: string } = {
    admin: 'admin',
    manager: 'manager',
    employee: 'employee'
  };

  getRoleForUser(username: string, password: string): string | null {
    // Perform authentication logic here
    // You can validate the username and password against a database or any other authentication mechanism

    // For this example, let's assume the username and password are valid
    // and retrieve the role from the userRoleMap based on the username
    const role = this.userRoleMap[username];

    return role ? role : null;
  }
}
