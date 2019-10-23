import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: String;
  @Output() clickevent =  new EventEmitter<String>();
  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    console.log('title is', this.title);
  }

  public sendModalConfirmation(){
    this.clickevent.emit(this.title);
  }
}
