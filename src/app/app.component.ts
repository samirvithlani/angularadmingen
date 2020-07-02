import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  public searchInput: String = '';
  public searchResult: Array<any> = [];
  public selectedInput: any = {};

  public toggle: Boolean = false;

  public seriesList: Array<any> = [

    {
      "name": "Mirzapur",
      "description": "amazone prime 2018",
      "genres": "Action,Crime,Drama",
      "releseDate": "29 august 2018(India)"
    },

    {
      "name": "Sacred Games",
      "description": "Netflix 2018",
      "genres": "Action,Crime,Drama",
      "releseDate": "15 august 2018(India)"
    },
    {
      "name": "Mirzapur Part 2",
      "description": "amazone prime 2018",
      "genres": "Action,Crime,Drama",
      "releseDate": "25 august 2020(India)"
    }

  ];

  fetchSeries(event: any) {

    if (event.target.value === '') {

      return this.searchResult = [];
    }

    this.searchResult = this.seriesList.filter((series) => {
      return series.name.toLowerCase().startsWith(event.target.value.toLowerCase());
    })

    //this.toggle=false;

  }

  showDetails(series) {

    this.selectedInput = series;
    this.toggle = true;
    this.searchInput = series.name;

  }

}
