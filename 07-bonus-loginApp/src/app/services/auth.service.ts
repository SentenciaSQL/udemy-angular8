import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UsuarioModel} from "../models/usuario.model";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;
  private apiKey = environment.apiKey;

  userToken: string;

  //Crear nuevos usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(
      map( resp => {
        console.log('Entro en el mapa de RXJS');
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  nuevoUsuarios( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData)
      .pipe(
        map( resp => {
          console.log('Entro en el mapa de RXJS');
          this.guardarToken( resp['idToken'] );
          return resp;
        })
      );

  }

  private guardarToken ( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString())
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): Boolean {
    if(this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }

    return this.userToken.length > 2;
  }
}
