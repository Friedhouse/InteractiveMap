import { Component, Output, EventEmitter, ViewChild, ElementRef, inject } from '@angular/core';
import { WorldDataService } from '../world-data.service';
import { WorldComponent } from '../world/world.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-svg-map',
  standalone: true,
  imports: [],
  templateUrl: './svg-map.component.html',
  styleUrl: './svg-map.component.css'
})
export class SvgMapComponent {

  private worldDataService = inject(WorldDataService);
  
  @ViewChild('worldMapSvg') worldMapSvg!: ElementRef<SVGElement>;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const pathElements = this.worldMapSvg?.nativeElement?.querySelectorAll('path') as NodeListOf<SVGPathElement>;
    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener('click', this.handleClick.bind(this)); //Adds an eventlistener to click event on SVG map path
    });
    console.log(this.worldMapSvg.nativeElement); 
    console.log(pathElements);
  }

  //Outputs all SVG selected elements as new Event emitters
  @Output() svgIdSelected = new EventEmitter<string>();
  @Output() incomeSelected = new EventEmitter<string>();
  @Output() capitalSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();

  @ViewChild(WorldComponent)
  private worldComponent!: WorldComponent;

  //defines asynchronus function and sets the target path
  async handleClick(event: MouseEvent) { 
    const path = event.target as SVGPathElement;
    const countryId = path.id;

    try {
      const data = await firstValueFrom(this.worldDataService.getCountryInformation(countryId));

          //Extracting country information
          const countryInfo = data[1][0];
          const countryName = countryInfo.name;
          const income = countryInfo.incomeLevel.value;
          const capitalCity = countryInfo.capitalCity;
          const longitude = countryInfo.longitude;
          const latitude = countryInfo.latitude;
          const region = countryInfo.region.value;

          //Emits extracted info
          this.svgIdSelected.emit(countryName);
          this.incomeSelected.emit(income);
          this.capitalSelected.emit(capitalCity);
          this.longitudeSelected.emit(longitude);
          this.latitudeSelected.emit(latitude);
          this.regionSelected.emit(region);

        } catch (error: any) {
        if (error.name === 'AbortError') {
          console.warn('Request was aborted:', error);
        } else {
          console.warn('Error fetching country information:', error);
        }
    }
  }
}
