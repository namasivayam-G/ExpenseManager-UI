import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardModal } from './dashboard-modal';
import { environment } from 'src/environments/environment';
import { ExpenseItem } from '../manage-expense/expense-item';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private monthlyExpenseURL = environment.monthlyExpenseURL;

  constructor(private http: HttpClient) { }

  public getMonthlySpendsByCategory(): Observable<Map<String, any>> {

    return this.http.get<Map<String, any>>(this.monthlyExpenseURL);
  }

}
