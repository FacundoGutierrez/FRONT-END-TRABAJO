import { Alumno } from './alumno';

export class Tiro {
    tirador: Alumno;
    distancia: number;
    encesto: boolean;
    posicion: string;
    constructor(tirador?: Alumno, distancia?: number, encesto?: boolean, posicion?: string){
        this.tirador = tirador;
        this.distancia = distancia;
        this.encesto = encesto;
        this.posicion = posicion;
    }
}
