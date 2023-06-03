import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ratingsData = [
    {
      id: 1,
      manager: 'John',
      employeeId: 'EMP001',
      employeeName: 'John Doe',
      department: 'Sales',
      rating: 4.5
    },
    {
      id: 2,
      manager: 'Jane',
      employeeId: 'EMP002',
      employeeName: 'Jane Smith',
      department: 'Marketing',
      rating: 3.8
    },
  ];

  private commentsData = [
    {
      id: 1,
      manager: 'John',
      employeeId: 'EMP001',
      employeeName: 'John Doe',
      comment: 'Good performance this month.'
    },
    {
      id: 2,
      manager: 'Jane',
      employeeId: 'EMP002',
      employeeName: 'Jane Smith',
      comment: 'Need improvement in meeting deadlines.'
    },
  ];

  constructor() { }

  getRatingsData(): any[] {
    return this.ratingsData;
  }

  getCommentsData(): any[] {
    return this.commentsData;
  }

  submitComment(employeeId: string, managerComment: string): void {
    console.log(`Submitted comment for employee ${employeeId}: ${managerComment}`);
  }
}
