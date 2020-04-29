import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  keyword: string = '';
  @Output() searchItem: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
