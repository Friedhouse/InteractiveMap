import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

export class WorldComponent {
  countryData: any = null; // Initialize country data to null
  constructor(private http: HttpClient) {
  }

}

