import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  data = [];
  selectedItem = undefined;
  currentPage = 1;
  imageOfItem = undefined;
  isLoadingImg = true;
  pages = 4;
  constructor(private service: SwapiService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.service.getSpecies()
    .subscribe((value: any) => {
      this.data = value.results;
      this.selectedItem = this.data[0];
      this.selectItem(this.selectedItem);
    });
  }

  selectItem(item): void{
    const number = item.url.match(/(\d+)/)[0];
    this.imageOfItem = `https://starwars-visualguide.com/assets/img/species/${number}.jpg`;
    this.selectedItem = item;
  }

  pageSelected(item): void{
    event.preventDefault();
    this.currentPage = item;
    this.getPage();
  }

  onLoad(){
    this.isLoadingImg = false;
  }

  nextPage(){
    event.preventDefault();
    if(this.currentPage !== this.pages){
      this.currentPage++;
      this.getPage();
    }
  }

  prevPage(){
    event.preventDefault();
    if(this.currentPage !== 1){
      this.currentPage--;
      this.getPage();
    }
  }

  getPage(){
    this.service.getSpecies(this.currentPage)
    .subscribe((value: any) => {
      this.data = value.results;
    });
  }

  searchItem(word){
    event.preventDefault();
    this.service.searchSpecies(word)
        .subscribe((value: any) => {
          this.data = value.results;
        })
  }
}
