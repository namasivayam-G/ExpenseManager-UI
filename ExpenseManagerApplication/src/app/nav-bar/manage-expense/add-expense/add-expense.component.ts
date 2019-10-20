import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from '../expense-item';
import { GetExpenseApiService } from '../get-expense-api.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenseItem: ExpenseItem = {};
  submitted: Boolean = false;
  confirmation: String = '';
  constructor(private api: GetExpenseApiService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submitting Expense', this.expenseItem);
    this.api.addExpenses(this.expenseItem).subscribe(result => this.confirmation = result);
    this.submitted = true;
    console.log('Created id', this.confirmation);
  }

}
