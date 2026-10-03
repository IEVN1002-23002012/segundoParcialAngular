import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { zodiaco } from './Formularios/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, zodiaco],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  title = 'web-app';
  /*protected readonly title = signal('segundoParcialAngular');*/

   ngOnInit(): void {
    initFlowbite();
}


}