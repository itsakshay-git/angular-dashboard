import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';


const dummyRatingsData = [
  { srNo: 1, manager: 'John Doe', employeeId: 'EMP001', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 2, manager: 'Johny Doe', employeeId: 'EMP002', employeeName: 'Alice', department: 'Sales', rating: 5 },
  { srNo: 3, manager: 'John2 Doe', employeeId: 'EMP003', employeeName: 'Alice', department: 'Sales', rating: 3 },
  { srNo: 4, manager: 'John3 Doe', employeeId: 'EMP004', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 5, manager: 'John4 Doe', employeeId: 'EMP004', employeeName: 'Alice', department: 'Sales', rating: 4 },
  { srNo: 6, manager: 'John5 Doe', employeeId: 'EMP006', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 7, manager: 'John6 Doe', employeeId: 'EMP007', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 8, manager: 'John7 Doe', employeeId: 'EMP008', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 9, manager: 'John8 Doe', employeeId: 'EMP009', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 11, manager: 'John9 Doe', employeeId: 'EMP0010', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 12, manager: 'John10 Doe', employeeId: 'EMP0011', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 13, manager: 'John11 Doe', employeeId: 'EMP0012', employeeName: 'Alice', department: 'Sales', rating: 3.5 },
  { srNo: 14, manager: 'John12 Doe', employeeId: 'EMP0013', employeeName: 'Alice', department: 'Sales', rating: 4 },
  { srNo: 15, manager: 'John13 Doe', employeeId: 'EMP0014', employeeName: 'Alice', department: 'Sales', rating: 5 },
  { srNo: 16, manager: 'John14 Doe', employeeId: 'EMP0015', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 17, manager: 'John15 Doe', employeeId: 'EMP0016', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 18, manager: 'John16 Doe', employeeId: 'EMP0017', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 19, manager: 'John17 Doe', employeeId: 'EMP0018', employeeName: 'Alice', department: 'Sales', rating: 4.5 },
  { srNo: 20, manager: 'John18 Doe', employeeId: 'EMP0019', employeeName: 'Alice', department: 'Sales', rating: 5 },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chart: any;
  role: string = 'Admin';
  ratingsData = dummyRatingsData;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  
  constructor(private router: Router) {}
  
  logout() {
    // Logout code specific to the admin component
    this.router.navigate(['/login']);
  }
  
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const labels = this.ratingsData.map((data) => data.employeeName);
    const ratings = this.ratingsData.map((data) => data.rating);

    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ratings',
          data: ratings,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5
          }
        }
      }
    });
  }
  
}
