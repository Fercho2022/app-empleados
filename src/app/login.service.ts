import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token:string;


  constructor(private router:Router, private cookie:CookieService) {


   }

  login(email:string,password:string){

    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response=>{

        firebase.auth().currentUser?.getIdToken().then(

              token=>{

                  this.token=token;
                  this.cookie.set("token", this.token) // se setea el nombre de la cookie "token", pasandole el valor del token a esa cookie llamada "token"
                  this.router.navigate(['/']);


              }
        )

      }

    );
  }

  getIdToken(){

    return this.cookie.get("token");
  }

  estaLogueado(){

    return this.cookie.get("token");
  }

  logout(){

    firebase.auth().signOut().then(()=>{

      this.token="";
      this.cookie.set("token", this.token);
      this.router.navigate(['/']);
      window.location.reload();
    })
  }


}
