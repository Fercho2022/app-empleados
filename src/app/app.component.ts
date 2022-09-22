import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private loginService:LoginService){


  }
  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyDSp3q_odFQsYiiOc42veSriuGKp69YEDo",
      authDomain: "clientes-86274.firebaseapp.com",


    })



  }

  estalogueado(){

    return this.loginService.estaLogueado();
  }

  logout(){

    this.loginService.logout();
  }


}
