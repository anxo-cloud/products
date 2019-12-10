import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  // Pais$: any =[];
  //Paiss;
  constructor(private cs: CountryService, private http : HttpClient) {
    // this.Paiss=this.http.get('https://api.worldbank.org/v2/country?per_page=1000&format=json')
    // .subscribe((data=>(console.log(data))));
  }



  ngOnInit() {

    // this.cs.getSeeschweiler();

  }

}
