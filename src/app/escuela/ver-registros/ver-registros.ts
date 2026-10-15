import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-registro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ver-registros.html',
  styleUrl: './ver-registros.css'
})
export class VerRegistro implements OnInit {
  compras: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const guardados = localStorage.getItem('comprasCinepolis');
    if (guardados) {
      this.compras = JSON.parse(guardados);
    }
  }

 
  editarCompra(index: number): void {
   
    localStorage.setItem('indiceEdicionCinepolis', index.toString());
    
  
    this.router.navigate(['/escuela/cinepolis']);
  }

  eliminarCompra(index: number): void {
    this.compras.splice(index, 1);
    localStorage.setItem('comprasCinepolis', JSON.stringify(this.compras));
  }
}