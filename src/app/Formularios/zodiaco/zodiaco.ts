import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './zodiaco.html',
  styleUrls: ['./zodiaco.css']
})
export class zodiaco {

  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = ''; 

  mostrarResultado: boolean = false;
  edadCalculada: number = 0;
  signoNombre: string = '';
  signoImagen: string = '';
  nombreCompleto: string = '';

  signosChinos = ['Mono', 'Gato', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragon', 'Serpiente', 'Caballo', 'Cabra'];
  
  imprimir() {
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;

    const anioActual = new Date().getFullYear();
    this.edadCalculada = anioActual - this.anio;

    this.signoNombre = this.signosChinos[this.anio % 12];
    
    this.signoImagen = `img/${this.signoNombre}.png`;

    this.mostrarResultado = true;

  }
}
