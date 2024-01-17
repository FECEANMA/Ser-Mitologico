import { Component } from '@angular/core';
import { Pierna2Component } from '../pierna-2/pierna-2.component';
import { Pierna3Component } from '../pierna-3/pierna-3.component';

@Component({
  selector: 'app-pierna',
  standalone: true,
  imports: [Pierna2Component, Pierna3Component],
  templateUrl: './pierna.component.html',
  styleUrl: './pierna.component.css'
})
export class PiernaComponent {
Pierna: string = 'PIERNA'
}
