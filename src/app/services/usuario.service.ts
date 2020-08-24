import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuario: Usuario;
  public logged = false;
  public color: string;
  constructor() {
    this.usuario = new Usuario();
  }


}
