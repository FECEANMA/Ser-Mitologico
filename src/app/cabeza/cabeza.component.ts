import { Component } from '@angular/core';
import { Cabeza2Component } from '../cabeza-2/cabeza-2.component';
import { Cabeza3Component } from '../cabeza-3/cabeza-3.component';

@Component({
  selector: 'app-cabeza',
  standalone: true,
  imports: [Cabeza2Component, Cabeza3Component],
  templateUrl: './cabeza.component.html',
  styleUrl: './cabeza.component.css'
})
export class CabezaComponent {
Cabeza: string = 'CABEZA'
}
