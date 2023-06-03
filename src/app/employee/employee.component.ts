import { Component } from '@angular/core';
import { Router } from '@angular/router';


const dummyEmployeeRating = { rating: 4.5, reward: 'Employee of the Month' };

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeRating = dummyEmployeeRating;
  managerComment: string = '';
  role: string = 'Employee';

  constructor(private router: Router) {}
  
  logout() {
    this.router.navigate(['/login']);
  }

  submitComment() {}
}
