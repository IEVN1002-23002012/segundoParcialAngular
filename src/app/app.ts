import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { zodiaco } from './Formularios/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Usuarios } from './Formularios/usuarios/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, zodiaco, Navbar, Usuarios],
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