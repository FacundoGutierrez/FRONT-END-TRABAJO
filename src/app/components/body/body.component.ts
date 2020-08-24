import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  contador = 60;
  usuario: Usuario;
  color: string;
  n: number;
  alumno: Alumno;
  num: number;
  registro: Array<any>;
  usuarios: Array<Usuario>;
  constructor(public usuarioService: UsuarioService) {
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    this.registro = new Array<any>();
    this.num = this.aleatorio();
    console.log(localStorage.getItem('usuarios'));
    setInterval(() => {
      if (this.contador === 0 || this.contador === this.num)
      {
        if ( this.contador === this.num)
        {
          this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
          let usuario = new Usuario('usuario' + this.num, '20' + this.aleatorio());
          usuario.presionado = true;
          usuario.color = this.crearcolor(this.contador);
          this.usuarios.push(usuario);
          localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
          
          usuario = new Usuario();
          
        }
        this.contador = 60;
        this.num = this.aleatorio();
      }
      this.contador--;
    }, 1000);
  }

  ngOnInit(): void {
  }
  reset()
  {
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let r = JSON.parse(localStorage.getItem('usuariologeado'));
    this.usuario = this.usuarios.find((item: Usuario) => item.password === r.password && item.nombre === r.nombre);
    this.usuario.presionado = true;
    this.usuario.color = this.crearcolor(this.contador);
    Object.assign(this.usuarioService.usuario, this.usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    localStorage.setItem('usuariologeado', JSON.stringify(this.usuario));
    this.contador = 60;
  }

  crearcolor(a: number): string
  {
    if (a <= 60 && a > 51)
    {
      return 'purpura';
    };
    if (a <= 51 && a > 41)
    {
      return 'azul';
    };
    if (a <= 41 && a > 31)
    {
      return 'verde';
    };
    if ( a <= 31 && a > 21)
    {
      return 'amarillo';
    };
    if (a <= 21 && a > 11 )
    {
      return 'naranja';
    };
    if (a <= 11 && a == 0 )
    {
      return 'rojo';
    };
  }
  aleatorio(): number{
    let n;
    n = Math.floor((Math.random() * (60 - 1)) );
    return n;
  }
}