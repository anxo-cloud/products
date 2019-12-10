import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url='https://api.worldbank.org/v2/country?per_page=1000&format=json';
  constructor(private http: HttpClient) {  }

  // getDatos() {
  //    return this.http.get('https://api.worldbank.org/v2/country?per_page=1000&format=json');

  // }
  // getSeeschweiler(){
  //   this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
  //     console.log(data);
  //   });
  // }

  getPais() {
    return this.http.get<any[]>(this.url);
  }

}
