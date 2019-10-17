import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManageExpenseComponent } from './nav-bar/manage-expense/manage-expense.component';
import { AddExpenseComponent } from './nav-bar/manage-expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './nav-bar/manage-expense/edit-expense/edit-expense.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ManageExpenseComponent,
    AddExpenseComponent,
    EditExpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
