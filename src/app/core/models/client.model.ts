import { Credit } from './credit.model';

export interface Client {
  key: string;
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  //   creditos: Credit[];
}
