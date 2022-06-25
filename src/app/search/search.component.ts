import { Component, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() setValue: EventEmitter<string> = new EventEmitter();

  filter!: FormControl;

  constructor() { 
    this.setSearchSubscription();
  }

  setSearchSubscription() {
    this.filter = new FormControl('');
    this.filter.valueChanges.subscribe(res=>{
      this.setValue.emit(res);
    })
  }




}
