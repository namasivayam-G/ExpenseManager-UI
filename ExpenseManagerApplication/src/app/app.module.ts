import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManageExpenseComponent } from './nav-bar/manage-expense/manage-expense.component';
import { AddExpenseComponent } from './nav-bar/manage-expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './nav-bar/manage-expense/edit-expense/edit-expense.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './nav-bar/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ManageExpenseComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
