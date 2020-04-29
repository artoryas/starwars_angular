import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  data = [];
  selectedItem = undefined;
  currentPage = 1;
  imageOfItem = undefined;
  isLoadingImg = true;
  pages = 9;
  constructor(private service: SwapiService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.service.getChars()
    .subscribe((value: any) => {
      this.data = value.results;
      this.selectedItem = this.data[0];
      this.selectItem(this.selectedItem);
    });
  }

  selectItem(item): void{
    const number = item.url.match(/(\d+)/)[0];
    this.imageOfItem = `https://starwars-visualguide.com/assets/img/characters/${number}.jpg`;
    this.selectedItem = item;
  }

  pageSelected(item): void{
    event.preventDefault();
    this.currentPage = item;
    this.service.getChars(this.currentPage)
        .subscribe((value: any) => {
          this.data = value.results;
        })
  }

  onLoad(){
    this.isLoadingImg = false;
  }

  nextPage(){
    event.preventDefault();
    if(this.currentPage !== this.pages){
      this.currentPage++;
      this.service.getChars(this.currentPage)
        .subscribe((value: any) => {
          this.data = value.results;
        });
    }
  }

  prevPage(){
    event.preventDefault();
    if(this.currentPage !== 1){
      this.currentPage--;
      this.service.getChars(this.currentPage)
        .subscribe((value: any) => {
          this.data = value.results;
        });
    }
  }

  searchItem(word){
    event.preventDefault();
    this.service.searchChars(word)
        .subscribe((value: any) => {
          this.data = value.results;
        })
  }
}
