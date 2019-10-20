import { Component, OnInit, Input } from '@angular/core';
import { GetExpenseApiService } from '../get-expense-api.service';
import { ExpenseItem } from '../expense-item';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModal } from '../../dashboard/dashboard-modal';
import { DashboardService } from '../../dashboard/dashboard.service';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  private listOfExpenses: ExpenseItem[];
  private exByCategory: Map<String, any>;
  editEnabled: Boolean = false;
  constructor(private api: GetExpenseApiService, private api2: DashboardService) { }
  ngOnInit() {
    this.getExpenseList();
    this.getByCategory();
    this.exByCategory.forEach((value: string, key: string) => {
      console.log(key, value);

    });

  }

  getExpenseList() {
    this.api.getExpenses().subscribe(result => this.listOfExpenses = result,
      error => console.log(error)
    );
    console.log('rev', this.listOfExpenses);
  }

  getByCategory() {
    this.api2.getMonthlySpendsByCategory().subscribe(result => this.exByCategory = result);
    console.log('looggin', this.exByCategory);
    this.exByCategory.forEach((value: string, key: string) => {
      console.log('funyyyyyyyyyyyyyyyyyyyy', key, value);
    }

    );\}

  delete(expense: ExpenseItem) {
    console.log(expense);
    this.api.deleteExpenses(expense).subscribe( error => console.log(error));
    this.getExpenseList();
  }

  edit() {
    console.log('edit called');
    this.editEnabled = true;
  }

}