import { Component, OnInit } from '@angular/core';
 
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
 
import { IAlumno } from '../alumnos';
 
@Component({
  selector: 'app-lista-alumnos',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './lista-alumnos.html',
})
export class ListaAlumnos implements OnInit {
 
  nuevoAlumno: IAlumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: ''
  };
 
  formulario!: FormGroup;
 
  ngOnInit(): void {
 
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });
 
  }
 
}
 