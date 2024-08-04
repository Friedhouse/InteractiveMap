//World data service is the API integration.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root' //Service is available globally
})
export class WorldDataService {
  private apiUrl = 'https://api.worldbank.org/v2/country/'; // Base URL

  constructor(private http: HttpClient) { 
    console.log('WorldDataService is initialized'); //Logs to console if api connects
  }

getCountryInformation(countryId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}${countryId}?format=json`);
  
  }
}

