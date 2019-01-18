import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly SERVER = 'http://localhost:3000/Usuarios';
  // tslint:disable-next-line:no-inferrable-types
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http = HttpClient) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.login === 'usuario@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/new']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
