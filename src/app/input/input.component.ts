import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control: FormControl = new FormControl()

  @Input() type = "text"
  @Input() placeholder= ""
  @Input() format= "" //per applicare masking solo agli input che voglio

  constructor() { }

  ngOnInit(): void {
  }

}