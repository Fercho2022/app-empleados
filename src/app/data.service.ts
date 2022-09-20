import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()
export class DataService {

  constructor(private httpClient:HttpClient ) {



    }

    cargarEmpleados(){

      return this.httpClient.get('https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos.json')

    }

    guardarEmpleado(empleados:Empleado[]){

      this.httpClient.put('https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

      response=>console.log("Se han guardado los empleados:" + response),

      error=>console.log("Error:" + error),
      );



  }
}
