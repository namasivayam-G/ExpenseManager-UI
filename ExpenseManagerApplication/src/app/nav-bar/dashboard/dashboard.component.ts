import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from '../manage-expense/expense-item';
import { GetExpenseApiService } from '../manage-expense/get-expense-api.service';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: String[] = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public lineChartLabels: String[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  public lineChartData = [1094, 145, 344, 234, 342, 455, 567];
  public lineChartType = 'line';
  private donutColors = [
    {
      backgroundColor: [
        'red',
        'green',
        'purple',
        'black',
        'yellow'
    ]
    }
  ];
  public exByCategory: any;
  constructor(private api: DashboardService) {
    this.getByCategory();
  }

  ngOnInit() {
  }

  getByCategory() {
    this.api.getMonthlySpendsByCategory().subscribe(result => {
      this.exByCategory = result as Map<String, ExpenseItem[]>;
      Object.keys( this.exByCategory).forEach((key: string) => {
        console.log(key,  this.api.getsumOfExpense(this.exByCategory[key]));
        this.doughnutChartData.push(this.api.getsumOfExpense(this.exByCategory[key]));
        this.doughnutChartLabels.push(key);
console.log(this.doughnutChartData, this.doughnutChartLabels);
        });
    });

  }

}
