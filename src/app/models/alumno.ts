import { Tiro } from './tiro';

export class Alumno {
    nombre: string;
    legajo: number;
    tiros: Array<Tiro>;

    constructor(nombre?: string, legajo?: number){
        this.nombre = nombre;
        this.legajo = legajo;
        this.tiros = new Array<Tiro>();
    }
}
