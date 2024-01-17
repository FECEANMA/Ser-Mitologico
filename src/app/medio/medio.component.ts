import { Component } from '@angular/core';
import { Medio2Component } from '../medio-2/medio-2.component';
import { Medio3Component } from '../medio-3/medio-3.component';

@Component({
  selector: 'app-medio',
  standalone: true,
  imports: [Medio2Component,Medio3Component],
  templateUrl: './medio.component.html',
  styleUrl: './medio.component.css'
})
export class MedioComponent {
Medio: string = 'MEDIO'
}
