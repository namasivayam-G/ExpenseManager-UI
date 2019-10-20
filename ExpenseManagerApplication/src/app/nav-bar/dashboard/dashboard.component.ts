import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from '../manage-expense/expense-item';
import { GetExpenseApiService } from '../manage-expense/get-expense-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  public dbmodal: ExpenseItem[];
  constructor(private api: GetExpenseApiService) {
  }

  ngOnInit() {
    this.getExpensebyMonth();
  }

  getExpensebyMonth() {
    this.api.getExpenses().subscribe(result => this.dbmodal = result);
    console.log('datssa', this.dbmodal);
  }
}
