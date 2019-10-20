// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getExpensesApiURL: 'http://localhost:8002/expense/total-expenses/1',
  addExpensesApiURL: 'http://localhost:8002/expense/addExpense/1',
  deleteExpensesApiURL: 'http://localhost:8002/expense/deleteExpense',
  monthlyExpenseURL: 'http://localhost:8004/dashboard/monthly-expense-by-category/1/2019/10'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
