import { Alumno } from './alumno';

export class Usuario {
    nombre: string;
    password: string;
    presionado: boolean;
    color = ' ';
    constructor(nombre?: string, password?: string){
        this.nombre = nombre;
        this.password = password;
        this.presionado = false;
    }
}
