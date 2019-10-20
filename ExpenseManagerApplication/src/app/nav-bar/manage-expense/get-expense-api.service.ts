import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ExpenseItem } from './expense-item';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetExpenseApiService {
  private _postsURL = environment.getExpensesApiURL;
  private addExpenseURL = environment.addExpensesApiURL;
  private deleteExpenseURL = environment.deleteExpensesApiURL;

  constructor(private http: HttpClient) { }

  public getExpenses(): Observable<ExpenseItem[]> {
    return this.http.get<ExpenseItem[]>(this._postsURL);
     }

  public addExpenses(expense: ExpenseItem): Observable<any> {
    return this.http.post(this.addExpenseURL, expense);
    }

  public deleteExpenses(expense: ExpenseItem): Observable<any> {
    // const ExpenseId: String = expense.expenseId;
    // this.addExpenseURL = this.deleteExpenseURL + '/' + ExpenseId;
    // return this.http.delete(this.addExpenseURL);
    // since delete doesn't support the request body we are using http generic request here.

      return this.http.request('delete', this.deleteExpenseURL, { body: expense});
  }

  private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }