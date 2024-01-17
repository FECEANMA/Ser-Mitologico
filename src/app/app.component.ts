import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabezaComponent } from './cabeza/cabeza.component';
import { MedioComponent } from './medio/medio.component';
import { PiernaComponent } from './pierna/pierna.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabezaComponent, MedioComponent, PiernaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ser-mitologico';
}
