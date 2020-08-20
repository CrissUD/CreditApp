import { Credit } from './credit.model';

export interface Client {
  cedula: number;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: number;
  //   creditos: Credit[];
}
