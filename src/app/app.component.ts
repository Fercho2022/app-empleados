import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[

    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Ana", "Martin", "Directora", 5500),
    new Empleado("Maria", "Fernandez", "Jefa sección", 3500),
    new Empleado("Laura", "Lopez", "Administrativo", 2500),
  ];

  constructor(private _miServicio:ServicioEmpleadosService){




  }



  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this._miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);



  }



}
