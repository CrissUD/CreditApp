import { Credit } from './credit.model';

export interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  //   creditos: Credit[];
}
