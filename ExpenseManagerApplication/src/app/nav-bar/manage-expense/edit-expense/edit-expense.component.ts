import { Component, OnInit } from '@angular/core';
import { GetExpenseApiService } from '../get-expense-api.service';
import { ExpenseItem } from '../expense-item';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  private listOfExpenses:ExpenseItem[];
  constructor(private api: GetExpenseApiService) { }

  ngOnInit() {
    this.getExpenseList();
  }

  getExpenseList(){
    this.api.getExpenses().subscribe(result => this.listOfExpenses = result,
      error => console.log(error)
    )
  }
}
