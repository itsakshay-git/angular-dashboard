import { Component } from '@angular/core';
import { Router } from '@angular/router';


const dummyEmployeeData = [
  { slNo: 1, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 2, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 3, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 4, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 5, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 6, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 7, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 8, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
  { slNo: 9, employeeId: 'EMP001', employeeName: 'Alice', rating: 4.5, managerComment: 'Great work!', employeeComment: '' },
];

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  employeeData = dummyEmployeeData;
  role: string = 'Manager';

  newEmployee: any = {
    slNo: null,
    employeeId: '',
    employeeName: '',
    rating: null,
    managerComment: '',
    employeeComment: ''
  };
  constructor(private router: Router) {}
  
  logout() {
    // Logout code specific to the admin component
    this.router.navigate(['/login']);
  }

  addEmployee() {
    // Add validation and logic to add a new employee to the employeeData array
    this.employeeData.push({ ...this.newEmployee });
    this.resetNewEmployee();
  }

  resetNewEmployee() {
    this.newEmployee = {
      slNo: null,
      employeeId: '',
      employeeName: '',
      rating: null,
      managerComment: '',
      employeeComment: ''
    };
  }
}
