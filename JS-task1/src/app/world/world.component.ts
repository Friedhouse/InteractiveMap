import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

export class WorldComponent implements OnInit{
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  @Input() countryRegion!: string;

  constructor() { }

  ngOnInit(): void { }
}

