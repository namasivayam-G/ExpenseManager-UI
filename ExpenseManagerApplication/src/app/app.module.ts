import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManageExpenseComponent } from './nav-bar/manage-expense/manage-expense.component';
import { AddExpenseComponent } from './nav-bar/manage-expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './nav-bar/manage-expense/edit-expense/edit-expense.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './nav-bar/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import { NgbModal, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './nav-bar/manage-expense/edit-expense/modal/modal.component';
import { AddModalComponent } from './nav-bar/manage-expense/edit-expense/add-modal/add-modal.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ManageExpenseComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    DashboardComponent,
    ModalComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  entryComponents: [
    ModalComponent,
    AddModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
