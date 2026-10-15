import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis implements OnInit {

  valorAPagar: number = 0;
  mensajeError: string = '';
  compras: any[] = [];
  indiceEdicion: number = -1;

  cinepolisForm = new FormGroup({
    nombre: new FormControl(''),
    compradores: new FormControl(1),
    tarjetaCineco: new FormControl('no'),
    boletas: new FormControl(1)
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    const datos = localStorage.getItem('comprasCinepolis');
    if (datos) {
      this.compras = JSON.parse(datos);
    }

    
    const indiceGuardado = localStorage.getItem('indiceEdicionCinepolis');
    if (indiceGuardado !== null) {
      this.indiceEdicion = parseInt(indiceGuardado, 10);
      const compraAEditar = this.compras[this.indiceEdicion];

      if (compraAEditar) {
        
        this.cinepolisForm.setValue({
          nombre: compraAEditar.nombre,
          compradores: compraAEditar.compradores,
          tarjetaCineco: compraAEditar.tarjetaCineco,
          boletas: compraAEditar.boletas
        });
        this.valorAPagar = compraAEditar.total;
      }

      
      localStorage.removeItem('indiceEdicionCinepolis');
    }
  }

  procesar(): void {
    this.mensajeError = '';
    this.valorAPagar = 0;

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

    this.valorAPagar = Math.round(total);

    const compraActual = {
      nombre: nombre,
      compradores: compradores,
      tarjetaCineco: this.cinepolisForm.value.tarjetaCineco,
      boletas: boletas,
      total: this.valorAPagar
    };

   
    if (this.indiceEdicion !== -1) {
      this.compras[this.indiceEdicion] = { ...compraActual };
      this.indiceEdicion = -1;
    } else {
      this.compras.push({ ...compraActual });
    }

   
    localStorage.setItem('comprasCinepolis', JSON.stringify(this.compras));
    
  
    this.cinepolisForm.reset({
      nombre: '',
      compradores: 1,
      tarjetaCineco: 'no',
      boletas: 1
    });
  }

  verRegistros(): void {
    this.router.navigate(['/escuela/ver-registro']); 
  }
}