//World data service is the API integration.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WorldDataService {
  

  constructor(private http: HttpClient) { }

  

getCountryInformation(countryId: string): Observable<any> {
  const apiUrl = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
  return this.http.get(apiUrl);
  
}
}

