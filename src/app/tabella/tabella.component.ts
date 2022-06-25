import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, combineLatest,of, Subject } from 'rxjs';
import { Employee } from '../employee';
import { FormControl } from '@angular/forms';
import { catchError, map, startWith, tap } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import { ModalService } from '../modal.service';



@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit, OnChanges {
  

  @Input() 
  data : any[] = [];

  @Output() 
  onDataRemove: EventEmitter<any> = new EventEmitter<any>();

  @Output() 
  onDataEdit: EventEmitter<any> = new EventEmitter<any>();

  @Output() 
  onDataModal: EventEmitter<void> = new EventEmitter<void>();

  public columns: any = {};
  filteredData$? : Observable<any[]>;
  filter!: FormControl;

  

  pagConfig: any;

  pageSize:number = 10;
  pagination: number[] = [];
  paginatedData: Subject<any> = new Subject<any>();
  test: any[] =[];

  constructor(public modal: ModalService) {
  }

  ngOnInit(): void { 
    this.filter = new FormControl('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']?.currentValue){
      this.columns = this.data.length > 0 ? Object.keys(this.data[0]) : [];
      this.test = this.data;
      this.filteredData$ = combineLatest([
        this.paginatedData.asObservable().pipe(startWith(this.data.slice(0,10)))
      ]).pipe(
        map((data) => data.filter((f:any) => this.columns.filter((k:any)=>k!=='salary'))[0]),
        tap(res => this.pagination = this.calculatePagination(Math.ceil(this.test.length / this.pageSize)))
      );
    }
  }

  calculatePagination(size:number): number[]{
    const result: number[] = [];

    for(let i=0; i < size; i++){
      result.push(i);
    }

    return result;
  }

  paginateData(page:number){
    const data = [...this.test].slice((page - 1) * this.pageSize, page * this.pageSize);
    this.paginatedData.next(data)
  }

  onCancel(row: any){
    this.onDataRemove.emit(row?.id);
  }

  onEdit(row:any){
    this.onDataEdit.emit(row);
    //this.showForm = true;
  }

  openModal() {
    this.onDataModal.emit();
  }


  
  
}

