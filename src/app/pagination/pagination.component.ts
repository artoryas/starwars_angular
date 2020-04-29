import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pages: number;
  @Input() currentPage: number;
  @Output() selectedPage: EventEmitter<any> = new EventEmitter();
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  @Output() prevPage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  iteration(n: number): any[] {
    return Array(n);
  }
}
