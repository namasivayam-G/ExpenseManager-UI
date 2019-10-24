import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseItem } from '../../expense-item';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  private expenseItem: ExpenseItem;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
