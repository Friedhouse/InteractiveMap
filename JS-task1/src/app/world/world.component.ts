import { Component, OnInit, Input, inject } from '@angular/core';
import { WorldDataService } from '../world-data.service';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

export class WorldComponent implements OnInit{

  private worldDataService = inject(WorldDataService);
  
  //Dedfines input properties allowing data to be passed from API
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  @Input() countryRegion!: string;

  constructor() { }
  ngOnInit(): void { }
}

