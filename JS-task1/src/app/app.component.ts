import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JS-task1';
}