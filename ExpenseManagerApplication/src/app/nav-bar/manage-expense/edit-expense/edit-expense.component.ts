import { Component, OnInit, Input } from '@angular/core';
import { GetExpenseApiService } from '../get-expense-api.service';
import { ExpenseItem } from '../expense-item';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModal } from '../../dashboard/dashboard-modal';
import { DashboardService } from '../../dashboard/dashboard.service';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  private listOfExpenses: ExpenseItem[];
  private exByCategory: any;
  editEnabled: Boolean = false;
  constructor(private api: GetExpenseApiService, private modalService: NgbModal) { }
  ngOnInit() {
    this.getExpenseList();

  }

  getExpenseList() {
    this.api.getExpenses().subscribe(result => this.listOfExpenses = result,
      error => console.log(error)
    );
    console.log('rev', this.listOfExpenses);
  }
  
  delete(expense: ExpenseItem) {
    const modalRef=  this.modalService.open(ModalComponent);
    modalRef.componentInstance.title="Sure to Delete the expense detail?"
    modalRef.componentInstance.clickevent.subscribe((result)=>{
      console.log('result is',result);
    if(result!=""){
      this.api.deleteExpenses(expense).subscribe();
      this.getExpenseList();
    }
    });

  }

  edit() {
    console.log('edit called');
    this.editEnabled = true;
  }

  //for modal handling
  openConfirmationEdit(){
  const modalRef=  this.modalService.open(ModalComponent);
  modalRef.componentInstance.title="Sure to edit the expense detail?"
  modalRef.componentInstance.clickevent.subscribe((result)=>{
  console.log(result);   
  });
  this.edit();
}

add(){
  const modalRef=  this.modalService.open(AddModalComponent);
  modalRef.componentInstance.title="Add Expenses"
}
}