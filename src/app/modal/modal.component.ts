import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  //providers: [ModalService] altro modo per fare injection
})
export class ModalComponent implements OnInit {

  @Input() modalID="";

  constructor(public modal : ModalService, public el:ElementRef) { 
    //console.log(modal.visible);
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

}
