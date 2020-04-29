import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  data = [];
  selectedItem = undefined;
  currentPage = 1;
  imageOfItem = undefined;
  isLoadingImg = true;
  pages = 6;
  constructor(private service: SwapiService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.service.getPlanets()
    .subscribe((value: any) => {
      this.data = value.results;
      this.selectedItem = this.data[0];
      this.selectItem(this.selectedItem);
    });
  }

  selectItem(item): void{
    const number = item.url.match(/(\d+)/)[0];
    this.imageOfItem = `https://starwars-visualguide.com/assets/img/planets/${number}.jpg`;
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
    this.service.getPlanets(this.currentPage)
    .subscribe((value: any) => {
      this.data = value.results;
    });
  }

  searchItem(word){
    event.preventDefault();
    this.service.searchPlanets(word)
        .subscribe((value: any) => {
          this.data = value.results;
        })
  }
}

