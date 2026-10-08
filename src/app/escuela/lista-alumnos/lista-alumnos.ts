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
    matricula: 'qq',
    nombre: 'qqqq',
    correo: 'qq',
    materia: 'qq'
  }
 
  formulario!: FormGroup;
 
  ngOnInit(): void {
 
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });
 
  }

  muestraAlumnos():void{
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.nombre=this.formulario.value.nombre
    this.nuevoAlumno.correo=this.formulario.value.correo
    this.nuevoAlumno.materia=this.formulario.value.materia
  }
 
}
 