import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  Paiss;
  constructor(private http : HttpClient) {

      this.Paiss=this.http.get('https://api.worldbank.org/v2/country?per_page=1000&format=json')
      .subscribe(data=>(console.log(data[1][3])));

   }

  ngOnInit() {
  }

}
