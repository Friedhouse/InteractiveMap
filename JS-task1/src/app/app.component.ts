import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { WorldDataService } from './world-data.service';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    SvgMapComponent,
    HttpClient,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  private worldDataService = inject(WorldDataService);
  
  //Declared variable that will hold country info
  selectedSvgId: string = '';
  selectedIncome: string = '';
  selectedCapital: string = '';
  selectedLongitude: string = '';
  selectedLatitude: string = '';
  selectedRegion: string = '';

  //Event Handlers that will be called when events from click events occur
  onSvgIdSelected(svgId: string) {
    this.selectedSvgId = svgId;
  }

  onIncomeSelected(incomeId: string) {
    this.selectedIncome = incomeId;
  }
  
  onCapitalSelected(capital: string) {
    this.selectedCapital = capital;
  }

  onLongitudeSelected(longitude: string) {
    this.selectedLongitude = longitude;
  }

  onLatitudeSelected(latitude: string) {
    this.selectedLatitude = latitude;
  }

  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }
}