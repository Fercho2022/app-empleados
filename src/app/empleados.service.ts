import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

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

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) {


  }

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+ "\n" +

    empleado.nombre + "\n" + "Salario:" + empleado.salario);

    this.empleados.push(empleado);


  }

  encontrarEmpleado(i:number){
    return this.empleados[i];

  }

  actualizarEmpleado(i:number, empleado:Empleado){
     let empleadoModificado=this.empleados[i];
     empleadoModificado.nombre=empleado.nombre;
     empleadoModificado.apellido=empleado.apellido;
     empleadoModificado.cargo=empleado.cargo;
     empleadoModificado.salario=empleado.salario;



  }

  eliminarEmpleado(i:number){

    this.empleados.splice(i, 1);
  }
}
