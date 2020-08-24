import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usu: Usuario;
  usuario: Usuario;
  usuarios: Array<Usuario>;
  p : boolean = false;
  constructor(public usuarioService: UsuarioService, private Toaster: ToastrService) {
    this.usuario = new Usuario();
    this.usu = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.verificar();
    if (localStorage.getItem('usuarios') == null)
    {
      localStorage.setItem('usuarios', JSON.stringify(new Array<Usuario>()));
    }
    else{
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: align
  public registrar(){
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    this.p =  this.usuarios.find((item: Usuario) => item.nombre === this.usu.nombre ) != null;
    if(this.p === true)
    {
      this.Toaster.error("Ingresó un usuario ya registrado");
      
    }
    else
    {
      this.usuarios.push(this.usu);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
     
    }
    this.usu = new Usuario();
   
  }

  public login(): void{
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
      this.usuarioService.logged =  this.usuarios.find((item: Usuario) => item.nombre === this.usuario.nombre && item.password === this.usuario.password) != null;
      if (this.usuarioService.logged === true)
      {
      localStorage.setItem('usuariologeado', JSON.stringify(this.usuarios.find((item: Usuario) => item.nombre === this.usuario.nombre )));
      Object.assign( this.usuarioService.usuario , JSON.parse(localStorage.getItem('usuariologeado')));
      console.log(this.usuarioService.usuario);
      }
      else{
        this.Toaster.error("Ingrese un usuario válido");
      }
    }
  // tslint:disable-next-line: align
  public verificar(){
    if (localStorage.getItem('usuariologeado') !== null){
      this.usuarioService.usuario = JSON.parse(localStorage.getItem('usuariologeado'));
      this.usuarioService.logged = true;
    }
    else{
      this.usuario = new Usuario();
        }
}
public logeout()
  {
    localStorage.removeItem('usuariologeado');
    this.usuario = new Usuario();
    this.usuarioService.usuario = new Usuario();
    this.usuarioService.logged = false;
  }
}




