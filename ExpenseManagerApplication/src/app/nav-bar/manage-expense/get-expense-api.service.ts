import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ExpenseItem } from './expense-item';


@Injectable({
  providedIn: 'root'
})
export class GetExpenseApiService {
  private _postsURL = "http://192.168.77.156:8002/expense/total-expenses/33";

  constructor(private http: HttpClient) { }

  public getExpenses() : Observable<ExpenseItem[]> {
    return this.http.get<ExpenseItem[]>(this._postsURL);
            
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }
  

 
