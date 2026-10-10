import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis {

  valorAPagar: number = 0;
  mensajeError: string = '';
  datosGuardados: any = null;

  cinepolisForm = new FormGroup({
    nombre: new FormControl(''),
    compradores: new FormControl(1),
    tarjetaCineco: new FormControl('no'),
    boletas: new FormControl(1)
  });

  procesar(): void {
    this.mensajeError = '';
    this.valorAPagar = 0;
    this.datosGuardados = null;

    const compradores = Number(this.cinepolisForm.value.compradores);
    const boletas = Number(this.cinepolisForm.value.boletas);
    const tieneTarjeta = this.cinepolisForm.value.tarjetaCineco === 'si';
    const nombre = this.cinepolisForm.value.nombre;

    if (boletas > compradores * 7) {
      this.mensajeError = 'Máximo 7 boletas por comprador.';
      return;
    }

    let total = boletas * 12.000;

    if (boletas > 5) {
      total = total * 0.85;
    } else if (boletas >= 3) {
      total = total * 0.90; 
    }

    if (tieneTarjeta) {
      total = total * 0.90; 
    }

    this.valorAPagar = total;


    this.datosGuardados = {
      nombre: nombre,
      compradores: compradores,
      tarjetaCineco: this.cinepolisForm.value.tarjetaCineco,
      boletas: boletas,
      total: total
    };
  }
}