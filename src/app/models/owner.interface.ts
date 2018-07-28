import { Direccion } from './direccion.Interface';
import { Social } from './social.Interface';

export interface Owner {
  Nombre?: string;
  Bithday?: string;
  Apellido1?: string;
  Apellido2?: string;
  AboutMe?: string;
  Direccion?: Direccion;
  Social?: Social;
}
