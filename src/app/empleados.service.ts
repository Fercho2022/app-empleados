import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[]=[

    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Ana", "Martin", "Directora", 5500),
    new Empleado("Maria", "Fernandez", "Jefa sección", 3500),
    new Empleado("Laura", "Lopez", "Administrativo", 2500),
  ];

  constructor() { }

  agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);


  }
}
