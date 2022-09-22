import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login.service';

@Injectable()
export class DataService {

  constructor(private httpClient:HttpClient, private loginService:LoginService ) {



    }

    cargarEmpleados(){

     const token=this.loginService.getIdToken();

      return this.httpClient.get('https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token);

    }

    guardarEmpleado(empleados:Empleado[]){

      this.httpClient.put('https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

      response=>console.log("Se han guardado los empleados:" + response),

      error=>console.log("Error:" + error),
      );



  }

  actualizarEmpleado(indice:number,empleado:Empleado){

    let url='https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.put(url, empleado).subscribe(

      response=>console.log("Se ha modificado correctamente el empleado:" + response),

      error=>console.log("Error:" + error),
      );

  }

  eliminarEmpleado(indice:number){

    let url='https://clientes-86274-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.delete(url).subscribe(

      response=>console.log("Se ha eliminado correctamente el empleado:" + response),

      error=>console.log("Error:" + error),
      );

  }

}
