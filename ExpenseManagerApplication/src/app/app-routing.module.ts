import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageExpenseComponent } from './nav-bar/manage-expense/manage-expense.component';
import { AddExpenseComponent } from './nav-bar/manage-expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './nav-bar/manage-expense/edit-expense/edit-expense.component';
import { DashboardComponent } from './nav-bar/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'manage-expense', component: ManageExpenseComponent, children: [
    { path: 'add-expense', component: AddExpenseComponent },
    { path: 'edit-expense', component: EditExpenseComponent },
    ]
  }, {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
